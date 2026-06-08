import crypto from "crypto";

// Stateless, signed access tokens for the gated resource library.
// No database needed — the token carries the email + expiry, signed with HMAC.
// Set HMAC_SECRET in Vercel to harden; falls back to a constant so it works out of the box.
const SECRET = process.env.HMAC_SECRET || "gmhs-resources-fallback-secret-2026";
const TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function b64url(buf: Buffer): string {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function fromB64url(s: string): Buffer {
  return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64");
}

export function signResourceToken(email: string): string {
  const payload = `${email}|${Date.now() + TTL_MS}`;
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest();
  return `${b64url(Buffer.from(payload))}.${b64url(sig)}`;
}

export function verifyResourceToken(token: string | undefined | null): {
  ok: boolean;
  email?: string;
} {
  try {
    if (!token) return { ok: false };
    const [p, s] = token.split(".");
    if (!p || !s) return { ok: false };
    const payload = fromB64url(p).toString();
    const expSig = crypto.createHmac("sha256", SECRET).update(payload).digest();
    const gotSig = fromB64url(s);
    if (expSig.length !== gotSig.length || !crypto.timingSafeEqual(expSig, gotSig)) {
      return { ok: false };
    }
    const [email, exp] = payload.split("|");
    if (!exp || Date.now() > Number(exp)) return { ok: false };
    return { ok: true, email };
  } catch {
    return { ok: false };
  }
}
