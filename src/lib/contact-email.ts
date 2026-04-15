import type { ContactSubmission } from "@/lib/contact-schema";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderDetail(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;color:#94a3b8;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;border-bottom:1px solid rgba(148,163,184,.16);">${escapeHtml(label)}</td>
    <td style="padding:10px 0;color:#e2e8f0;font-size:14px;border-bottom:1px solid rgba(148,163,184,.16);">${escapeHtml(value)}</td>
  </tr>`;
}

export function buildInternalEmailHtml(submission: ContactSubmission) {
  return `
    <div style="background:#020617;padding:32px;font-family:Arial,sans-serif;color:#e2e8f0;">
      <div style="max-width:720px;margin:0 auto;border:1px solid rgba(125,211,252,.18);border-radius:24px;background:linear-gradient(180deg,#0f172a 0%,#020617 100%);padding:32px;">
        <p style="color:#67e8f9;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;">New DTC AV project inquiry</p>
        <h1 style="font-size:28px;line-height:1.2;margin:16px 0 12px;">A new lead came in from the website.</h1>
        <p style="color:#94a3b8;font-size:15px;line-height:1.7;margin:0 0 24px;">
          Review the details below and follow up with the requester directly.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          ${renderDetail("Name", submission.name)}
          ${renderDetail("Company", submission.company)}
          ${renderDetail("Email", submission.email)}
          ${renderDetail("Phone", submission.phone)}
          ${renderDetail("Project Type", submission.projectType)}
          ${renderDetail("Budget / Timeline", submission.budgetTimeline)}
          ${renderDetail("Location", submission.projectLocation || "Not provided")}
        </table>
        <div style="margin-top:24px;border:1px solid rgba(148,163,184,.18);border-radius:20px;padding:20px;background:rgba(15,23,42,.72);">
          <p style="margin:0 0 10px;color:#67e8f9;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;">Project Scope</p>
          <p style="margin:0;color:#e2e8f0;font-size:15px;line-height:1.75;white-space:pre-wrap;">${escapeHtml(submission.message)}</p>
        </div>
      </div>
    </div>
  `;
}

export function buildInternalEmailText(submission: ContactSubmission) {
  return [
    "New DTC AV project inquiry",
    `Name: ${submission.name}`,
    `Company: ${submission.company}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    `Project Type: ${submission.projectType}`,
    `Budget / Timeline: ${submission.budgetTimeline}`,
    `Location: ${submission.projectLocation || "Not provided"}`,
    "",
    "Project Scope:",
    submission.message,
  ].join("\n");
}

export function buildConfirmationEmailHtml(submission: ContactSubmission) {
  return `
    <div style="background:#020617;padding:32px;font-family:Arial,sans-serif;color:#e2e8f0;">
      <div style="max-width:720px;margin:0 auto;border:1px solid rgba(125,211,252,.18);border-radius:24px;background:linear-gradient(180deg,#0f172a 0%,#020617 100%);padding:32px;">
        <p style="color:#67e8f9;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;">DTC AV Solutions</p>
        <h1 style="font-size:28px;line-height:1.2;margin:16px 0 12px;">Thanks for reaching out, ${escapeHtml(submission.name)}.</h1>
        <p style="color:#cbd5e1;font-size:15px;line-height:1.8;margin:0 0 18px;">
          We received your inquiry and our team will review the project details you shared. You can expect a follow-up from DTC AV Solutions with next steps.
        </p>
        <div style="margin:24px 0;border:1px solid rgba(148,163,184,.18);border-radius:20px;padding:20px;background:rgba(15,23,42,.72);">
          <p style="margin:0 0 10px;color:#67e8f9;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;">Submitted Project Type</p>
          <p style="margin:0;color:#e2e8f0;font-size:16px;">${escapeHtml(submission.projectType)}</p>
        </div>
        <p style="color:#94a3b8;font-size:14px;line-height:1.7;margin:0;">
          If you need to add anything else before we connect, reply to this message and include any new scope notes, room counts, or timeline updates.
        </p>
      </div>
    </div>
  `;
}

export function buildConfirmationEmailText(submission: ContactSubmission) {
  return [
    `Thanks for reaching out, ${submission.name}.`,
    "",
    "We received your inquiry and our team will review the project details you shared.",
    `Project Type: ${submission.projectType}`,
    `Budget / Timeline: ${submission.budgetTimeline}`,
    "",
    "If you need to add anything else before we connect, reply to this email with the updated scope.",
  ].join("\n");
}
