import {
  buildConfirmationEmailHtml,
  buildConfirmationEmailText,
  buildInternalEmailHtml,
  buildInternalEmailText,
} from "@/lib/contact-email";
import { contactSchema } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { Resend } from "resend";

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json(
      {
        success: false,
        message: parsed.error.issues[0]?.message ?? "Invalid form submission.",
      },
      { status: 400 },
    );
  }

  const submission = parsed.data;

  if (submission.website) {
    return Response.json({ success: true });
  }

  const rateLimit = checkRateLimit(getClientIp(request));

  if (!rateLimit.ok) {
    return Response.json(
      {
        success: false,
        message: "Too many submissions from this network. Please wait a moment and try again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((rateLimit.retryAfterMs ?? 0) / 1000)),
        },
      },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const internalTo = process.env.RESEND_INTERNAL_TO;
  const replyTo = process.env.RESEND_REPLY_TO;

  if (!apiKey || !from || !internalTo) {
    return Response.json(
      {
        success: false,
        message: "Email delivery is not configured yet.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const internalRecipients = internalTo
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  await Promise.all([
    resend.emails.send({
      from,
      to: internalRecipients,
      subject: `New DTC AV inquiry from ${submission.name}`,
      replyTo: replyTo || submission.email,
      html: buildInternalEmailHtml(submission),
      text: buildInternalEmailText(submission),
    }),
    resend.emails.send({
      from,
      to: submission.email,
      subject: "We received your DTC AV project inquiry",
      replyTo: replyTo || internalRecipients[0],
      html: buildConfirmationEmailHtml(submission),
      text: buildConfirmationEmailText(submission),
    }),
  ]);

  return Response.json({ success: true });
}
