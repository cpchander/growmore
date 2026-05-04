#!/usr/bin/env node
/**
 * Submit all site URLs to IndexNow (Bing, Yandex, Seznam, Naver)
 * Run after deployment: node scripts/submit-indexnow.mjs
 */

const HOST = "growmoresolutions.com";
const KEY = "c1b44daf188b4f68b7c2613ae1beaa68";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// All site URLs
const urls = [
  // Static pages
  "/",
  "/contact",
  "/get-quote",
  "/experience",
  "/villa-walkthrough",
  "/smart-home-planner",
  "/projects",
  "/about/our-story",
  "/about/team",
  "/about/certifications",
  "/blog",
  "/compare",
  "/brands",
  "/privacy",
  "/terms",

  // Service pages
  "/services/home-automation",
  "/services/conceptual-lighting",
  "/services/home-theater",
  "/services/home-security",
  "/services/central-vacuum",
  "/services/clean-air-systems",
  "/services/solar-power",
  "/services/hvac-automation",
  "/services/commercial",

  // City pages
  "/cities/mumbai",
  "/cities/delhi",
  "/cities/bangalore",
  "/cities/hyderabad",
  "/cities/pune",
  "/cities/chennai",
  "/cities/kolkata",
  "/cities/ahmedabad",
  "/cities/goa",
  "/cities/jaipur",
  "/cities/chandigarh",
  "/cities/lucknow",

  // Solution pages
  "/solutions/for-homeowners",
  "/solutions/for-builders",
  "/solutions/for-architects",
  "/solutions/for-hotels",

  // Brand pages
  "/brands/knx",
  "/brands/crestron",
  "/brands/control4",
  "/brands/lutron",
  "/brands/sonos",
];

const fullUrls = urls.map((path) => `https://${HOST}${path}`);

async function submitToIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: fullUrls,
  };

  console.log(`Submitting ${fullUrls.length} URLs to IndexNow...\n`);

  // Submit to multiple engines
  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  for (const engine of engines) {
    try {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const engineName = new URL(engine).hostname;
      if (res.ok || res.status === 202) {
        console.log(`✓ ${engineName}: ${res.status} — Accepted`);
      } else {
        const text = await res.text().catch(() => "");
        console.log(`✗ ${engineName}: ${res.status} — ${text.slice(0, 200)}`);
      }
    } catch (err) {
      console.log(`✗ ${new URL(engine).hostname}: Error — ${err.message}`);
    }
  }

  console.log(`\nDone! ${fullUrls.length} URLs submitted.`);
  console.log(`Key file: https://${HOST}/${KEY}.txt`);
}

submitToIndexNow();
