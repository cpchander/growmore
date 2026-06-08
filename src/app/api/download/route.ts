import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { verifyResourceToken } from "@/lib/resourceToken";

export const runtime = "nodejs";

// Map public keys → private (non-public) filenames. Files live in /private-assets,
// which is never served statically — only streamed here after token validation.
const FILES: Record<string, { file: string; title: string }> = {
  "company-profile": { file: "company-profile.pdf", title: "GMHS-Company-Profile.pdf" },
  lookbook: { file: "project-lookbook.pdf", title: "GMHS-Project-Lookbook.pdf" },
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const token = url.searchParams.get("k");
  const key = url.searchParams.get("file") || "";
  const mode = url.searchParams.get("mode") === "view" ? "inline" : "attachment";

  const auth = verifyResourceToken(token);
  if (!auth.ok) {
    return NextResponse.json({ error: "Link expired or invalid. Please request access again." }, { status: 403 });
  }

  const entry = FILES[key];
  if (!entry) return NextResponse.json({ error: "Unknown file" }, { status: 404 });

  try {
    const buf = await fs.readFile(path.join(process.cwd(), "private-assets", entry.file));
    return new NextResponse(new Uint8Array(buf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${mode}; filename="${entry.title}"`,
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  } catch (err) {
    console.error("Download read error:", err);
    return NextResponse.json({ error: "File temporarily unavailable" }, { status: 500 });
  }
}
