# Arjun & Priya — Wedding Invitation Website

## How to add your real photos (step by step)

1. Unzip this folder anywhere on your computer or phone.
2. Open the `assets/images/` folder.
3. For each photo you want to add, **rename your photo file to match exactly** the filename it needs to replace (see the list below), then copy it into `assets/images/`, replacing the placeholder.
   - No need to resize manually — the site scales every photo automatically. Square-ish or portrait photos work best for the circular/arch frames.
   - Keep file size reasonable (under ~3–4 MB per photo) so the site loads quickly on mobile data.
4. Save, then reopen `index.html` in your browser to check everything looks right.

**You do NOT need to edit any code to add photos** — just drop files into `assets/images/` with the correct names below.

### Photo filename checklist

| Where it appears | File to add |
|---|---|
| Hero — Lord Venkateshwara (left) | `assets/images/venkateshwara.jpg` |
| Hero — Goddess Padmavathi (right) | `assets/images/padmavathi.jpg` |
| Hero — Groom | `assets/images/groom.jpg` |
| Hero — Bride | `assets/images/bride.jpg` |
| Hero — Grandfather | `assets/images/grandfather.jpg` |
| Hero — Grandmother | `assets/images/grandmother.jpg` |
| Couple section — Groom | `assets/images/groom.jpg` (same file reused) |
| Couple section — Bride | `assets/images/bride.jpg` (same file reused) |
| Family — Father | `assets/images/father.jpg` |
| Family — Mother | `assets/images/mother.jpg` |
| Family — Groom's brother (Mahesh Rao) | `assets/images/sibling-brother.jpg` |
| Family — Groom's brother (Mani Prasad) | `assets/images/sibling-2.jpg` |
| Family — Groom's brother (Sandeep) | `assets/images/sibling-3.jpg` |
| Family — Groom's brother (Pranav) | `assets/images/sibling-4.jpg` |
| Family — Groom's sister (Nikitha) | `assets/images/sibling-5.jpg` |
| Family — Groom's sister (Sheena) | `assets/images/sibling-6.jpg` |
| Family — Groom's brother (Omkar) | `assets/images/sibling-7.jpg` |
| Family — Groom's brother (Pavan) | `assets/images/sibling-8.jpg` |
| Family — Groom's brother (Shanmuka) | `assets/images/sibling-9.jpg` |
| Family — Groom's sister (Naga Lakshmi) | `assets/images/sibling-10.jpg` |
| Family — Groom's sister (Vaishali) | `assets/images/sibling-11.jpg` |
| Family — Groom's sister (Vaishnavi) | `assets/images/sibling-12.jpg` |
| Family — Groom's uncle (Naresh) | `assets/images/uncle.jpg` |
| Family — Groom's aunty (Aruna) | `assets/images/aunty.jpg` |
| Family — All siblings together (group photo) | `assets/images/siblings-group.jpg` |
| Pathange Family section (2 extra frames) | `assets/images/family-1.jpg`, `assets/images/family-2.jpg` |
| Elders of the family (2 frames, no names shown) | `assets/images/elder-1.jpg`, `assets/images/elder-2.jpg` |
| Divine blessing section (lower on the page) — Lord Venkateshwara | `assets/images/venkateshwara-blessing.jpg` (a different photo from the hero one) |
| Final section — Best couple photo | `assets/images/couple.jpg` |
| Events — one photo per event | `assets/images/event-engagement.jpg`, `event-haldi.jpg`, `event-wedding.jpg` |
| Gallery (7 photos) | `assets/images/gallery-1.jpg` through `gallery-7.jpg` |
| Opening page — couple photo (already included; replace to change it) | `assets/images/intro-couple.jpg` |

Until you add a real photo, that spot shows a soft gold placeholder pattern so nothing looks broken or blank.

### Opening page photo — tips
- A wide (landscape) photo of the couple works best, like the one already included. Keep both faces in the middle of the picture — on phones the sides are trimmed slightly so the faces stay big.
- To change it, save your new photo as `assets/images/intro-couple.jpg` (same name, replacing the old one).
- If you test by double-clicking `index.html`, some browsers (Chrome especially) block local images. Opening it through a hosted link (Netlify, GitHub Pages, etc.) always works.

### About the deity photos
Please don't use random images found online without checking the license — many are copyrighted by the artist. Good sources: your own temple visit photos, an image you've purchased/licensed, or free-to-use devotional image sites that explicitly allow reuse.

**For the hero background specifically:** `venkateshwara.jpg` and `padmavathi.jpg` now appear as large, softly faded figures in the background of the opening screen — like a temple mural behind the couple, not small icons. For the best effect:
- Use a **tall, vertical photo** where the deity is standing (not a wide/landscape shot).
- A photo with a **plain or dark background** works best, since the site already fades the edges for you.
- If you can get a **transparent-background cutout (PNG)** of the deity, it will blend in even better — but a regular photo works fine too, it'll just have a soft rectangular fade.

## How to edit your wedding details
Open `js/script.js` and edit the `WEDDING_CONFIG` object near the top. This single object controls: names, dates, venue, family names, siblings, events, gallery, contact info and WhatsApp number.

## Pathange Family section (5 extra frames)
Edit the `extraFamily` array in `WEDDING_CONFIG` in `js/script.js` — rename "Family Member 1" etc. to real names, and add/remove entries freely. Photos go in `assets/images/family-1.jpg` through `family-5.jpg`.

## Slideshow
An auto-playing slideshow (using the same 7 gallery photos) now sits below the Gallery section — it advances every 3.5 seconds, has prev/next arrows and dots, pauses on hover, and any slide can be tapped to zoom in.

## Multi-language support (English / Hindi / Telugu / Kannada)
Tap **EN / हि / తె / ಕ** in the top navigation to switch languages — headings, labels, events, story text and ceremony details all translate. To add or edit translated phrases, look for the `TRANSLATIONS` object in `js/script.js` (fixed labels) and the `{ en, hi, te, kn }` fields inside `WEDDING_CONFIG` (event names, venue, address, story text).

## How to add background music (flute recommended)
Drop an mp3 file into `assets/music/` named `wedding-music.mp3`. Music never autoplays — guests tap the floating music button.

**Free instrumental flute tracks you can legally use:**
- [Pixabay Music](https://pixabay.com/music/search/flute/) — search "flute", filter for royalty-free, no attribution required
- [YouTube Audio Library](https://studio.youtube.com/) → Audio Library → search "flute" or "Indian" (free for any use)
- [Free Music Archive](https://freemusicarchive.org/) — search "flute" or "sitar"

Download an instrumental track (no vocals), rename it to `wedding-music.mp3`, and drop it into `assets/music/`.

## How to add/remove events
Edit the `events` array in `WEDDING_CONFIG` in `js/script.js` — each entry is one card on the timeline. Currently set to Engagement, Haldi, and Wedding.

## RSVP form
The form currently just shows a thank-you message with no backend. To collect real responses, connect it to a Google Form, Formspree, or an email service — happy to help wire that up.

## Sending different language links to different people
Once you've uploaded this site somewhere (see "Opening the site" below) and have a live link, you can send a version that opens directly in one language by adding `?lang=` to the end of the URL:

- English: `yourlink.com/index.html?lang=en`
- Hindi: `yourlink.com/index.html?lang=hi`
- Telugu: `yourlink.com/index.html?lang=te`
- Kannada: `yourlink.com/index.html?lang=kn`

Each person still sees the language switcher and can change it themselves if they prefer — the link just decides which language opens first.

## Opening wrapper (splash screen)
The site opens with a full-screen welcome page: the couple's photo in a gold frame, their names, and an "Open Invitation" button with a butterfly. Tapping it makes the invitation zoom gently toward you while butterflies flutter out, then the website appears. The same photo is softly blurred behind it, so it fits phones, tablets and computers properly. The tap also satisfies the browser's rule for starting background music, so music is most likely to start right at that moment.

## Opening the site
Open `index.html` directly in a browser, or upload the whole folder to any static host (Netlify, GitHub Pages, Vercel) to get a shareable link for WhatsApp.
