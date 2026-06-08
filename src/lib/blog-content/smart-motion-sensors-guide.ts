export const content = `
## Smart Motion Sensors for Home Automation: PIR vs mmWave (India Guide)

**Last updated: 8 June 2026**

Motion sensors are the trigger behind the smartest moments in an automated home — lights that switch on as you walk in, an AC that turns off in an empty room, an alert when someone moves while you're away. But there's one distinction that decides whether your automations feel magical or maddening: PIR versus mmWave. This guide explains how motion sensors work, why your lights keep turning off when you sit still, and which sensor to choose for an Indian home.

### Key Takeaways

- **A motion sensor detects a change — heat, movement, or radio reflection — and fires a trigger** that runs an automation: lights on, AC off, alarm armed, scene started.
- **PIR sensors detect *moving* body heat; mmWave (radar) sensors detect *presence*** — including someone sitting perfectly still. PIR is why your lights go dark when you stop moving; mmWave fixes it.
- **PIR is cheap (₹600–2,500) and battery-friendly; mmWave costs 3–6× more (₹1,500–10,500)** but holds "occupied" while you read, work, or sleep.
- **India heat caveat:** in hot summers, PIR sensitivity drops as room temperature approaches body temperature — a real reason to choose radar-based mmWave here.
- **Biggest payback:** turning off lights, fans, and AC in empty rooms — meaningful savings given Indian electricity tariffs and AC-heavy usage.

---

## How Does a Smart Motion Sensor Work?

A motion sensor monitors its surroundings and, when it detects a change, sends a signal that triggers an automation. That trigger can do almost anything in a smart home — turn on a light, start recording on a camera, set back the AC, send a notification, or activate a whole scene. "Lights on when you enter a room" is the single most common home automation, and a motion or presence sensor is what makes it happen.

The two building blocks are simple: **occupancy** sensing turns lights on when you arrive *and* off when the room empties (fully automatic), while **vacancy** sensing only turns them off automatically (you switch on manually) — useful when you don't want lights firing on every passing movement. Pair either with a built-in **light (lux) sensor** so the automation only runs when the room is actually dark.

## PIR vs mmWave: The Distinction That Matters

This is the single most important thing to understand before buying a sensor.

| | **PIR (Passive Infrared)** | **mmWave / Radar (Presence)** |
|-|----------------------------|-------------------------------|
| **Detects** | Body heat *moving* across zones | Radio reflections, including tiny movements (breathing) |
| **Stationary person** | Fails — assumes the room is empty | Holds "occupied" — detects you breathing |
| **Power** | Very low — 3–5 year battery | Higher — usually needs constant USB/wired power |
| **Cost (India)** | ₹600–2,500 | ₹1,500–10,500 |
| **Best for** | Hallways, stairs, entry, security | Living rooms, study, bedroom, bathroom |

The defining flaw of PIR: **the moment you stop moving, it assumes the room is empty.** That's the classic frustration of lights turning off while you're reading, watching TV, or sitting in a meeting. mmWave radar fixes it by detecting that you're still breathing in the chair — it holds "occupied" through an hour of reading or a full night's sleep. For any room where people sit still, mmWave is worth the premium.

## Best Motion Sensors in India (2026)

| Sensor | Type | India price (approx) | Notes |
|--------|------|----------------------|-------|
| **Sonoff SNZB-03P** | PIR, Zigbee | ~₹1,595 | Cheap, reliable, local |
| **Aqara Motion Sensor P1** | PIR, Zigbee | ~₹1,800–2,500 | 5-year battery, pet-friendly |
| **Philips Hue Motion** | PIR + light + temp | ~₹1,799–2,899 | Needs Hue Bridge |
| **Sonoff SNZB-06P** | 5.8 GHz radar | ~₹1,500–2,500 | Cheapest presence sensor |
| **Aqara FP300** | mmWave + PIR + light + temp + humidity | ~₹8,000–10,500 | 5-in-1, Matter/Thread |
| **Aqara Presence Sensor FP2** | 60 GHz mmWave, zones, multi-person, fall detection | ~₹10,479 | Flagship; bathroom-safe (IPX5) |

For premium and wired homes, KNX and Control4 presence detectors (Theben, ABB, Faradite) combine motion and daylight sensing on the bus and are project-priced.

## What You Can Do With Motion Sensors

- **Automatic lighting** — lights on as you enter, off when the room empties. Combine with a lux sensor so it only fires when it's dark.
- **Energy savings** — the biggest payback: turn off lights, fans, and AC in empty rooms. With mmWave, the AC won't shut off on someone sitting still at a desk.
- **Security** — trigger an alarm, siren, push alert, or camera recording on motion when your home is in "Away" mode.
- **Hands-free convenience** — staircases, corridors, bathrooms, and wardrobes that light up as you approach and switch off after a timeout.
- **Elderly care** — a sensor like the Aqara FP2 detects falls and inactivity and alerts family, with no camera or wearable — valuable in India's multi-generational homes.

## Common Problems (and How We Solve Them)

- **False triggers (PIR)** — air-conditioning vents, ceiling fans, sunlight, and heaters create heat swings that PIR reads as motion. We position sensors away from vents, fans, and windows, and tune sensitivity.
- **The India heat problem** — in hot summers, the contrast between body heat and room temperature shrinks, so PIR can miss people. This is a concrete reason we recommend mmWave radar for Indian climates.
- **Pets** — pet-friendly PIR sensors and zoned mmWave can be tuned to ignore animals up to a certain height or weight.
- **Placement** — PIR works best mounted around 2–2.5 m high, angled slightly down; mmWave should avoid glass, mirrors, fans, and AC airflow, which distort radar.

## Frequently Asked Questions

### What is the difference between PIR and mmWave motion sensors?
PIR (passive infrared) sensors detect moving body heat, so they're cheap and battery-efficient but fail to detect someone sitting still. mmWave (millimetre-wave radar) sensors detect presence — including tiny movements like breathing — so they keep a room "occupied" even when you're motionless. PIR suits hallways and security; mmWave suits living rooms, studies, bedrooms, and bathrooms where people sit still.

### Why do my smart lights turn off when I sit still?
Because you're using a PIR sensor. PIR only detects *movement* of body heat, so when you stop moving — reading, watching TV, working — it assumes the room is empty and switches the lights off. The fix is a mmWave (radar) presence sensor, which detects that you're still breathing in the chair and keeps the room "occupied" until you actually leave.

### Do motion sensors save electricity?
Yes — it's the biggest practical payback, especially in India with high tariffs and heavy AC use. An occupancy sensor turns lights, fans, and AC off automatically when a room empties, eliminating the energy wasted on empty rooms. For climate control, use a mmWave sensor so the AC doesn't shut off on someone sitting still, then sets back only after the room is genuinely vacant for a few minutes.

### Do motion sensors work with pets?
They can, with the right choice. Pet-friendly PIR sensors split their field of view into zones with reduced ground-level sensitivity to ignore animals up to a certain weight, and you can mount them higher or angled. mmWave radar sensors can be tuned with sensitivity and exclusion zones to ignore pet-height movement. We select and configure the sensor around your pets so they don't cause false triggers.

### Do smart motion sensors need a hub?
It depends on the protocol. Zigbee sensors (Aqara, Sonoff) need a hub or a local controller like Home Assistant. Wi-Fi sensors connect to your router directly. Newer Matter-over-Thread sensors (Aqara P2, FP300) pair into Apple Home, Google Home, or Alexa via a Thread border router without a vendor hub. Wired KNX or Control4 sensors connect to the professional system's controller.

### Do motion sensors work without internet?
The good ones do. Zigbee, Thread, and wired KNX sensors run locally through a hub or bus, so your motion-triggered lighting and security keep working when the internet is down. The Aqara FP2, for example, runs automations locally. Cloud-only Wi-Fi sensors may lose remote and voice features during an outage, which is why we favour local control in Indian homes.

## Next Steps

**Want the bigger picture?** Read [What Is Home Automation](/blog/what-is-home-automation) for the fundamentals, and our [smart lighting guide](/blog/smart-lighting-guide-indian-homes) for sensor-driven lighting design.

**Ready to design it?** Use the [Smart Home Planner](/smart-home-planner) to configure your system, or [book a free consultation](/contact) — we'll specify the right sensors for your rooms, pets, and climate.

*[Anupam Mahajan](/about/team) is Co-Founder & Managing Director of Grow More Solutions (GMHS), India's most experienced home automation integrator with 15+ years of experience and 600+ installations across 15+ cities. GMHS is a certified partner of KNX, Crestron, Control4, and Lutron.*
`;
