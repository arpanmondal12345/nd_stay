# ND Stays — Website

Static, multi-page website for ND Stays (premium furnished stays, Greater Noida).
Plain HTML/CSS/JS with no build step, so it can be hosted on GitHub Pages or any static host.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home: hero, availability panel, highlights, the room, amenities, special occasions, gallery preview, location, final CTA |
| `room.html` | The room: all photos + lightbox, facilities, balcony, bathroom, kitchenette, enquiry form |
| `rooms.html` | Redirects to `room.html` (keeps old links working) |
| `gallery.html` | Filterable gallery (Bedroom, Interiors, Bathroom, Balcony & Views, Kitchenette, Special Decorations) with lightbox |
| `contact.html` | Full enquiry form, contact & location card, question form |
| `privacy.html`, `terms.html`, `cancellation.html` | **Draft** policies, marked as needing owner approval |
| `404.html` | Not-found page |

## Where to change things
- **WhatsApp number, phone, Instagram, address, Google Maps link, domain:** `assets/js/config.js` (one file).
  - Set `mapUrl` to show a "Get directions" button. While it is `null`, the site says "Contact us for exact directions."
  - Set `fullAddress` to replace the "Kaveri City Center, Delta 1" reference everywhere.
- **Room name, description, facilities, photos:** `assets/js/rooms.js` → `ND_ROOMS` (ND Stays has one room).
  - Facilities use keys from `ND_FACILITIES` (e.g. `"ac"`, `"tv"`, `"balcony"`).
  - The room is currently called "The ND Stays Room" — change `name` if the owner prefers another.
  - If a second room is ever added, add another entry: the site automatically switches to room cards and a "Preferred room" field.
- **Gallery photos & categories:** `assets/js/rooms.js` → `ND_GALLERY`.
- **Colours, fonts, spacing:** variables at the top of `assets/css/styles.css`.

## Adding or replacing photos
Each photo exists twice in `images/<category>/`:
`name.webp` (full size) and `name-sm.webp` (640px wide, used for cards and phones).
Reference it **without** the extension, e.g. `"images/rooms/bedroom-new"`.

To convert a new photo (Python + Pillow):
```bash
python3 -c "from PIL import Image; im=Image.open('new.jpg').convert('RGB'); im.save('images/rooms/bedroom-new.webp',quality=80); im.thumbnail((640,900)); im.save('images/rooms/bedroom-new-sm.webp',quality=78)"
```
Photos are 3:4 portrait. Other ratios also work, but add the size to `imgSize()` in `main.js` for exact layout reservation.

## Photos
All 16 photos belong to the one ND Stays room, organised in `images/rooms`, `interiors`, `balcony`, `bathroom`, `kitchenette` and `special-occasions`.

## Run locally
```bash
cd nd-stays
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy to GitHub Pages
Push the folder contents to a repo → Settings → Pages → Deploy from branch (`main`, root).
`.nojekyll` is included. Once the domain is known, also:
1. set `siteUrl` in `config.js`,
2. replace `YOUR-DOMAIN` in `sitemap.xml` and `robots.txt`,
3. add `<link rel="canonical">` in each page head (placeholder comment is there).

## Test results
Tested in headless Chromium at 375 / 430 / 768 / 1024 / 1440px:
- No horizontal overflow, no broken images, no JavaScript errors on any page.
- Enquiry validation: past check-in, check-out not after check-in, and guests < 1 are all rejected with inline messages.
- WhatsApp links open `wa.me/918006109480` with a correctly encoded, pre-filled message (dates, nights, guests, room, occasion, request).
- Lightbox: click to open, arrow keys / buttons / swipe to navigate, Esc to close, focus returns to the photo.

## Information needed from the owner
1. Room name (currently "The ND Stays Room"), bed type, maximum guests and room size
2. Exact address and a Google Maps link
3. Rates, or confirmation that rates stay "on enquiry"
4. Check-in/out times, ID rules, house rules, cancellation & refund terms (for the draft policy pages)
5. Wi-Fi, parking, housekeeping and power backup — none are claimed until confirmed
6. Decoration packages and what each includes
7. A logo file, if they have one (a typographic wordmark is used for now)
8. The domain name
