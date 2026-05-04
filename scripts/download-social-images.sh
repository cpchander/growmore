#!/bin/bash
# ============================================================
# Download images from social media for the website
# Run this script LOCALLY on your machine (not in CI/CD)
# Prerequisites: curl, cwebp (from webp package)
# ============================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
IMG_DIR="$PROJECT_DIR/public/images"

echo "=== Grow More Solutions — Image Downloader ==="
echo "Output directory: $IMG_DIR"
echo ""

# Create directories
mkdir -p "$IMG_DIR/company" "$IMG_DIR/projects" "$IMG_DIR/team" "$IMG_DIR/social"

# ─── STEP 1: Download from Instagram ───────────────────────
echo "📸 Instagram images need to be downloaded manually:"
echo ""
echo "1. Open https://www.instagram.com/conceptual_homeautomation/"
echo "2. Right-click each post image → 'Save image as...'"
echo "3. Save to: $IMG_DIR/social/"
echo ""
echo "Recommended posts to save:"
echo "  - Showroom/project photos (first 4-6 posts)"
echo "  - Product showcase images"
echo "  - Automation demo screenshots"
echo ""

# ─── STEP 2: Download logo from Facebook ───────────────────
echo "🏢 Downloading Facebook page logo..."
echo ""
echo "1. Open https://www.facebook.com/GMHTS/photos/"
echo "2. Find the GMHS logo image (blue/red/yellow GMHS text)"
echo "3. Right-click → 'Save image as...' → save to $IMG_DIR/company/logo.png"
echo ""

# ─── STEP 3: Download team/founder photos ──────────────────
echo "👤 Team photos:"
echo ""
echo "1. Find Anupam Mahajan's photo from LinkedIn:"
echo "   https://in.linkedin.com/in/anupam-mahajan-3882ba14"
echo "2. Save to: $IMG_DIR/team/anupam-mahajan.jpg"
echo ""

# ─── STEP 4: Convert to WebP ──────────────────────────────
echo "🔄 Converting images to WebP..."
echo "(Requires 'cwebp' — install with: brew install webp)"
echo ""

# Check if cwebp is available
if command -v cwebp &> /dev/null; then
    for dir in company projects team social; do
        for img in "$IMG_DIR/$dir"/*.{jpg,jpeg,png} 2>/dev/null; do
            if [ -f "$img" ]; then
                base="${img%.*}"
                echo "  Converting: $(basename "$img") → $(basename "$base").webp"
                cwebp -q 85 "$img" -o "${base}.webp" 2>/dev/null
            fi
        done
    done
    echo ""
    echo "✅ Conversion complete!"
else
    echo "⚠️  cwebp not found. Install with: brew install webp"
    echo "   Then re-run this script to convert images."
fi

echo ""
echo "=== Done ==="
echo ""
echo "After downloading images, update src/lib/images.ts to point to"
echo "the local /images/ paths instead of Unsplash URLs."
echo ""
echo "Example:"
echo '  hero: "/images/social/showroom-1.webp"'
echo '  about.team: "/images/team/anupam-mahajan.webp"'
echo '  company.logo: "/images/company/logo.webp"'
