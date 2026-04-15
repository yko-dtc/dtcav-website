const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

type Entry = {
  count: number;
  expiresAt: number;
};

const buckets = new Map<string, Entry>();

export function checkRateLimit(identifier: string) {
  const now = Date.now();
  const current = buckets.get(identifier);

  if (!current || current.expiresAt <= now) {
    buckets.set(identifier, { count: 1, expiresAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (current.count >= MAX_SUBMISSIONS) {
    return {
      ok: false,
      retryAfterMs: current.expiresAt - now,
    };
  }

  current.count += 1;
  return { ok: true };
}
