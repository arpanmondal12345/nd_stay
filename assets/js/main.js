/* =========================================================================
   ND STAYS — SITE SCRIPT
   Shared header/footer, WhatsApp enquiry builder, forms, rooms, gallery.
   Content lives in config.js and rooms.js — you rarely need to edit this file.
   ========================================================================= */
(function () {
  "use strict";
  const C = window.ND_CONFIG;
  const ROOMS = window.ND_ROOMS || [];
  const FAC = window.ND_FACILITIES || {};

  /* ---------- Icons (stroke icons in the Lucide style) ---------- */
  const ICONS = {
    ac: '<path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"/><path d="M6.6 15.6A2 2 0 1 0 10 17v-5"/>',
    fan: '<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7 2 0 3 2 2 4l-4 3"/><path d="M14 12c4 0 7 1 7 4 0 2-2 3-4 2l-3-4"/><path d="M12 14c0 4-1 7-4 7-2 0-3-2-2-4l4-3"/><path d="M10 12c-4 0-7-1-7-4 0-2 2-3 4-2l3 4"/>',
    tv: '<rect width="20" height="15" x="2" y="7" rx="2"/><polyline points="17 2 12 7 7 2"/>',
    wardrobe: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M12 2v20"/><path d="M9 11v2M15 11v2"/>',
    desk: '<path d="M3 10h18"/><path d="M5 10v10M19 10v10"/><path d="M14 10v5h5"/><path d="M8 3h3l1 4H7z"/>',
    fridge: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 10h14"/><path d="M15 5v2M15 13v3"/>',
    balcony: '<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
    light: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
    lamp: '<path d="M8 2h8l4 10H4L8 2Z"/><path d="M12 12v6"/><path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"/>',
    mirror: '<ellipse cx="12" cy="10" rx="6" ry="8"/><path d="M12 18v4M9 22h6"/>',
    seat: '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v6c0 1.7 3.1 3 7 3s7-1.3 7-3V7"/><path d="M8 16l-1 6M16 16l1 6"/>',
    bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
    bath: '<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M2 12h20"/><path d="M7 19v2M17 19v2"/>',
    heater: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    microwave: '<rect width="20" height="15" x="2" y="4" rx="2"/><rect width="8" height="7" x="6" y="8" rx="1"/><path d="M18 8v7"/><path d="M6 19v2M18 19v2"/>',
    sparkle: '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 10.5c.5 2 2 3.5 4.5 4.5l1.2-1.2 2 .8v1.6c-4 .6-9-4-8.6-8.2h1.6l.8 2Z" fill="currentColor" stroke="none"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    insta: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Images ---------- */
  const imgSize = (src) => (src.includes("birthday-decoration") ? [1312, 1199] : [1086, 1448]);
  function picture(src, alt, { sizes = "(max-width: 700px) 100vw, 50vw", eager = false, cls = "" } = {}) {
    const [w, h] = imgSize(src);
    return `<img class="${cls}" src="${src}.webp" srcset="${src}-sm.webp 640w, ${src}.webp ${w}w" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  }

  /* ---------- WhatsApp ---------- */
  const waLink = (message) => `https://wa.me/${C.whatsappNumber}${message ? "?text=" + encodeURIComponent(message) : ""}`;
  const GENERAL_MSG = "Hello ND Stays! I would like to know more about your room and availability.";
  function openWhatsApp(message) {
    const url = waLink(message);
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url; // popup blocked — open in same tab
  }

  /* ---------- Dates ---------- */
  const pad = (n) => String(n).padStart(2, "0");
  const isoLocal = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseISO = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const prettyDate = (s) => {
    const d = parseISO(s);
    const wd = d.toLocaleDateString("en-GB", { weekday: "short" });
    const mo = d.toLocaleDateString("en-GB", { month: "short" });
    return `${wd}, ${d.getDate()} ${mo} ${d.getFullYear()}`;
  };
  const addDays = (s, n) => { const d = parseISO(s); d.setDate(d.getDate() + n); return isoLocal(d); };
  const todayISO = () => isoLocal(new Date());

  /* ---------- Header / footer ---------- */
  const NAV = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "rooms", label: "Our Room", href: "room.html" },
    { key: "amenities", label: "Amenities", href: "index.html#amenities" },
    { key: "occasions", label: "Special Occasions", href: "index.html#occasions" },
    { key: "gallery", label: "Gallery", href: "gallery.html" },
    { key: "location", label: "Location", href: "index.html#location" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ];

  const LOGO = `
    <svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M8 36V17a12 12 0 0 1 24 0v19" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M14 36V18.5a6 6 0 0 1 12 0V36" fill="none" stroke="var(--gold)" stroke-width="1.6"/>
      <path d="M4 36h32" stroke="currentColor" stroke-width="1.6"/>
    </svg>
    <span class="logo-text"><span class="logo-nd">ND</span><span class="logo-stays">Stays</span></span>`;

  function renderHeader() {
    const el = document.querySelector("[data-header]");
    if (!el) return;
    const active = document.body.dataset.page;
    el.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <div class="header-inner container">
        <a class="logo" href="index.html" aria-label="ND Stays home">${LOGO}</a>
        <nav class="nav" id="site-nav" aria-label="Main">
          <ul>${NAV.map((n) => `<li><a href="${n.href}"${n.key === active ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("")}</ul>
          <div class="nav-mobile-extra">
            <a class="btn btn-primary btn-block" href="contact.html#enquiry">Check Availability</a>
            <a class="btn btn-outline btn-block" href="${waLink(GENERAL_MSG)}" target="_blank" rel="noopener">${icon("chat")} Chat on WhatsApp</a>
          </div>
        </nav>
        <a class="btn btn-primary header-cta" href="contact.html#enquiry">Check Availability</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">${icon("menu")}</button>
      </div>`;

    const toggle = el.querySelector(".nav-toggle");
    const nav = el.querySelector(".nav");
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.innerHTML = icon(open ? "close" : "menu");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); } });

    const onScroll = () => el.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function renderFooter() {
    const el = document.querySelector("[data-footer]");
    if (!el) return;
    const year = new Date().getFullYear();
    el.innerHTML = `
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="logo logo-light" href="index.html" aria-label="ND Stays home">${LOGO}</a>
          <p>Premium, private, fully furnished stays in ${esc(C.city)}, ${esc(C.region)}.</p>
          <a class="btn btn-gold" href="${waLink(GENERAL_MSG)}" target="_blank" rel="noopener">${icon("chat")} Chat on WhatsApp</a>
        </div>
        <div>
          <h2 class="footer-title">Explore</h2>
          <ul class="footer-links">
            <li><a href="room.html">Our Room</a></li>
            <li><a href="index.html#amenities">Amenities</a></li>
            <li><a href="index.html#occasions">Special Occasions</a></li>
            <li><a href="gallery.html">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h2 class="footer-title">Contact</h2>
          <ul class="footer-links">
            <li><a href="tel:${C.phoneTel}">${icon("phone")} ${esc(C.phoneDisplay)}</a></li>
            <li><a href="${C.instagramUrl}" target="_blank" rel="noopener">${icon("insta")} ${esc(C.instagramHandle)}</a></li>
            <li><span>${icon("pin")} ${esc(C.fullAddress || C.locationReference)}</span></li>
          </ul>
        </div>
        <div>
          <h2 class="footer-title">Policies</h2>
          <ul class="footer-links">
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms &amp; Conditions</a></li>
            <li><a href="cancellation.html">Cancellation Policy</a></li>
            <li><a href="contact.html">Contact &amp; Location</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© ${year} ${esc(C.brand)}. All enquiries are confirmed directly by ND Stays.</p>
      </div>`;
  }

  function renderFloatingWA() {
    const a = document.createElement("a");
    a.className = "wa-float";
    a.href = waLink(GENERAL_MSG);
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Chat with ND Stays on WhatsApp (opens in a new tab)");
    a.innerHTML = `${icon("chat")}<span class="wa-float-label">WhatsApp</span>`;
    document.body.appendChild(a);
    // Appear after the first screen so it never covers the hero buttons.
    const isHome = document.body.dataset.page === "home";
    const onScroll = () => a.classList.toggle("is-visible", !isHome || window.scrollY > Math.min(window.innerHeight * 0.6, 520));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Generic WhatsApp links ---------- */
  function wireWhatsAppLinks() {
    document.querySelectorAll("[data-wa]").forEach((a) => {
      const msg = a.dataset.wa || GENERAL_MSG;
      a.href = waLink(msg);
      a.target = "_blank";
      a.rel = "noopener";
    });
    document.querySelectorAll("[data-tel]").forEach((a) => { a.href = `tel:${C.phoneTel}`; a.textContent = C.phoneDisplay; });
    document.querySelectorAll("[data-insta]").forEach((a) => { a.href = C.instagramUrl; });
  }

  /* ---------- Form helpers ---------- */
  function setError(field, msg) {
    const wrap = field.closest(".field");
    const out = wrap && wrap.querySelector(".field-error");
    field.setAttribute("aria-invalid", msg ? "true" : "false");
    if (out) out.textContent = msg || "";
  }
  const fieldHTML = (id, label, control, hint = "") => `
    <div class="field">
      <label for="${id}">${label}${hint ? ` <span class="field-hint">${hint}</span>` : ""}</label>
      ${control}
      <p class="field-error" id="${id}-error" aria-live="polite"></p>
    </div>`;

  /* ---------- Booking enquiry form ---------- */
  let formCount = 0;
  function mountEnquiryForm(el) {
    const variant = el.dataset.variant || "full";
    const presetRoom = el.dataset.room || "";
    const uid = "f" + ++formCount;
    const t = todayISO();
    const roomOptions = ['<option value="">No preference</option>']
      .concat(ROOMS.map((r) => `<option value="${esc(r.name)}"${r.id === presetRoom ? " selected" : ""}>${esc(r.name)} — ${esc(r.tagline)}</option>`))
      .join("");

    const dates = `
      ${fieldHTML(`${uid}-in`, "Check-in", `<input type="date" id="${uid}-in" name="checkin" min="${t}" required aria-describedby="${uid}-in-error">`)}
      ${fieldHTML(`${uid}-out`, "Check-out", `<input type="date" id="${uid}-out" name="checkout" min="${addDays(t, 1)}" required aria-describedby="${uid}-out-error">`)}
      ${fieldHTML(`${uid}-g`, "Guests", `<input type="number" id="${uid}-g" name="guests" min="1" max="20" step="1" value="2" inputmode="numeric" required aria-describedby="${uid}-g-error">`)}`;

    if (variant === "compact") {
      el.innerHTML = `
        <form class="enquiry enquiry-compact" novalidate>
          <div class="enquiry-row">${dates}
            <div class="field field-submit"><button type="submit" class="btn btn-primary btn-block">${icon("chat")} Check availability</button></div>
          </div>
          <p class="enquiry-note">${icon("info")} This is an availability enquiry, not a live booking. It opens WhatsApp with your dates — ND Stays will reply with availability and pricing.</p>
          <p class="enquiry-status" role="status" aria-live="polite"></p>
        </form>`;
    } else {
      el.innerHTML = `
        <form class="enquiry enquiry-full" novalidate>
          ${fieldHTML(`${uid}-name`, "Full name", `<input type="text" id="${uid}-name" name="name" autocomplete="name" maxlength="80">`, "(optional)")}
          <div class="enquiry-grid-3">${dates}</div>
          <div class="${ROOMS.length > 1 ? "enquiry-grid-2" : ""}">
            ${ROOMS.length > 1 ? fieldHTML(`${uid}-room`, "Preferred room", `<select id="${uid}-room" name="room">${roomOptions}</select>`) : ""}
            ${fieldHTML(`${uid}-occ`, "Occasion", `<select id="${uid}-occ" name="occasion"><option>Regular Stay</option><option>Birthday</option><option>Anniversary</option><option>Other</option></select>`)}
          </div>
          ${fieldHTML(`${uid}-msg`, "Additional message", `<textarea id="${uid}-msg" name="message" rows="3" maxlength="500" placeholder="Arrival time, decoration request, questions…"></textarea>`, "(optional)")}
          <button type="submit" class="btn btn-primary btn-lg btn-block">${icon("chat")} Send enquiry on WhatsApp</button>
          <p class="enquiry-note">${icon("info")} Your booking is not confirmed until ND Stays replies. No payment details are collected on this website.</p>
          <p class="enquiry-status" role="status" aria-live="polite"></p>
        </form>`;
    }

    const form = el.querySelector("form");
    const fin = form.elements.checkin, fout = form.elements.checkout, fg = form.elements.guests;

    fin.addEventListener("change", () => {
      if (fin.value) {
        fout.min = addDays(fin.value, 1);
        if (!fout.value || fout.value <= fin.value) fout.value = addDays(fin.value, 1);
        setError(fin, ""); setError(fout, "");
      }
    });
    fout.addEventListener("change", () => setError(fout, ""));
    fg.addEventListener("input", () => setError(fg, ""));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector(".enquiry-status");
      status.textContent = "";
      let ok = true, first = null;
      const fail = (f, m) => { setError(f, m); ok = false; first = first || f; };
      const today = todayISO();

      if (!fin.value) fail(fin, "Please choose your check-in date.");
      else if (fin.value < today) fail(fin, "Check-in can't be in the past.");
      else setError(fin, "");

      if (!fout.value) fail(fout, "Please choose your check-out date.");
      else if (fin.value && fout.value <= fin.value) fail(fout, "Check-out must be after check-in.");
      else setError(fout, "");

      const g = Number(fg.value);
      if (!fg.value || !Number.isInteger(g) || g < 1) fail(fg, "Enter the number of guests (1 or more).");
      else if (g > 20) fail(fg, "For groups larger than 20, please message us directly.");
      else setError(fg, "");

      if (!ok) { first.focus(); return; }

      const nights = Math.round((parseISO(fout.value) - parseISO(fin.value)) / 86400000);
      const v = (n) => (form.elements[n] ? form.elements[n].value.trim() : "");
      const lines = ["Hello ND Stays! I would like to enquire about room availability.", ""];
      if (v("name")) lines.push(`Name: ${v("name")}`);
      lines.push(`Check-in: ${prettyDate(fin.value)}`);
      lines.push(`Check-out: ${prettyDate(fout.value)} (${nights} night${nights > 1 ? "s" : ""})`);
      lines.push(`Guests: ${g}`);
      if (form.elements.room) lines.push(`Room preference: ${v("room") || "No preference"}`);
      if (form.elements.occasion) lines.push(`Occasion: ${v("occasion")}`);
      if (v("message")) lines.push(`Special request: ${v("message")}`);
      lines.push("", "Please share availability and pricing. Thank you!");

      openWhatsApp(lines.join("\n"));
      status.innerHTML = `${icon("check")} WhatsApp is opening with your enquiry. Press send in WhatsApp — your stay is confirmed only once ND Stays replies.`;
    });
  }

  /* ---------- Decoration enquiry ---------- */
  function mountDecorationForm(el) {
    const uid = "d" + ++formCount;
    el.innerHTML = `
      <form class="enquiry enquiry-decor" novalidate>
        <div class="enquiry-grid-2">
          ${fieldHTML(`${uid}-type`, "Celebration", `<select id="${uid}-type" name="type"><option>Birthday decoration</option><option>Anniversary decoration</option><option>Romantic room setup</option></select>`)}
          ${fieldHTML(`${uid}-date`, "Preferred date", `<input type="date" id="${uid}-date" name="date" min="${todayISO()}" aria-describedby="${uid}-date-error">`, "(optional)")}
        </div>
        <button type="submit" class="btn btn-gold btn-block">${icon("sparkle")} Enquire About Decoration</button>
        <p class="enquiry-status" role="status" aria-live="polite"></p>
      </form>`;
    const form = el.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = form.elements.date;
      if (d.value && d.value < todayISO()) { setError(d, "Please pick today or a future date."); d.focus(); return; }
      setError(d, "");
      const msg = [
        (() => { const t = form.elements.type.value.toLowerCase(); return `Hello ND Stays! I would like to enquire about ${/^[aeiou]/.test(t) ? "an" : "a"} ${t}.`; })(),
        "",
        `Preferred date: ${d.value ? prettyDate(d.value) : "To be decided"}`,
        "",
        "Could you share the decoration options, pricing and availability? Thank you!"
      ].join("\n");
      openWhatsApp(msg);
      form.querySelector(".enquiry-status").innerHTML = `${icon("check")} WhatsApp is opening. Decoration is arranged only after ND Stays confirms it with you.`;
    });
  }

  /* ---------- Contact question form ---------- */
  function mountQuestionForm(el) {
    const uid = "q" + ++formCount;
    el.innerHTML = `
      <form class="enquiry" novalidate>
        ${fieldHTML(`${uid}-name`, "Your name", `<input type="text" id="${uid}-name" name="name" autocomplete="name" maxlength="80">`, "(optional)")}
        ${fieldHTML(`${uid}-msg`, "Your question", `<textarea id="${uid}-msg" name="message" rows="4" maxlength="600" required aria-describedby="${uid}-msg-error"></textarea>`)}
        <button type="submit" class="btn btn-outline btn-block">${icon("chat")} Send question on WhatsApp</button>
        <p class="enquiry-status" role="status" aria-live="polite"></p>
      </form>`;
    const form = el.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const m = form.elements.message;
      if (!m.value.trim()) { setError(m, "Please type your question."); m.focus(); return; }
      setError(m, "");
      const name = form.elements.name.value.trim();
      openWhatsApp(`Hello ND Stays!${name ? ` This is ${name}.` : ""}\n\n${m.value.trim()}`);
      form.querySelector(".enquiry-status").innerHTML = `${icon("check")} WhatsApp is opening with your question.`;
    });
  }

  /* ---------- Rooms ---------- */
  const roomWAMessage = () => "Hello ND Stays! I'm interested in booking your room. Could you share availability and pricing? Thank you!";
  const roomHref = (r) => (ROOMS.length > 1 ? `room.html?id=${r.id}` : "room.html");

  function roomCard(r, i) {
    const chips = r.facilities.filter((f) => f !== "bed").slice(0, 4)
      .map((f) => `<li>${icon(FAC[f].icon)}${esc(FAC[f].label)}</li>`).join("");
    return `
      <article class="room-card reveal" style="--d:${i * 70}ms">
        <a class="room-card-media" href="${roomHref(r)}" tabindex="-1" aria-hidden="true">
          ${picture(r.cover, r.photos[0].alt, { sizes: "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" })}
          <span class="room-card-count">${r.photos.length} photo${r.photos.length > 1 ? "s" : ""}</span>
        </a>
        <div class="room-card-body">
          <p class="eyebrow">${esc(r.tagline)}</p>
          <h3><a href="${roomHref(r)}">${esc(r.name)}</a></h3>
          <p class="room-card-summary">${esc(r.summary)}</p>
          <ul class="chips">${chips}</ul>
          <div class="room-card-actions">
            <a class="btn btn-primary" href="${roomHref(r)}">View details</a>
            <a class="btn btn-icon" href="${waLink(roomWAMessage(r))}" target="_blank" rel="noopener" aria-label="Enquire about ${esc(r.name)} on WhatsApp">${icon("chat")}</a>
          </div>
        </div>
      </article>`;
  }

  /* Homepage feature for the room (used when there is a single room) */
  function renderRoomFeature(el) {
    const r = ROOMS[0];
    if (!r) return;
    const pick = (src) => r.photos.find((p) => p.src === src) || r.photos[0];
    const big = pick(r.cover), side = [pick("images/rooms/bedroom-botanical-mustard"), pick("images/balcony/balcony-city-night")];
    const chips = r.facilities.slice(0, 8).map((f) => `<li>${icon(FAC[f].icon)}${esc(FAC[f].label)}</li>`).join("");
    el.innerHTML = `
      <div class="feature-media" data-lightbox>
        <button type="button" class="fm-main" data-src="${big.src}">${picture(big.src, big.alt, { sizes: "(max-width: 900px) 100vw, 40vw" })}</button>
        ${side.map((p) => `<button type="button" data-src="${p.src}">${picture(p.src, p.alt, { sizes: "(max-width: 900px) 50vw, 20vw" })}</button>`).join("")}
      </div>
      <div class="feature-copy">
        <p class="eyebrow">${esc(r.tagline)}</p>
        <h3>${esc(r.name)}</h3>
        <p>${esc(r.summary)}</p>
        <ul class="chips">${chips}</ul>
        <div class="btn-row">
          <a class="btn btn-primary" href="${roomHref(r)}">See the room · ${r.photos.length} photos</a>
          <a class="btn btn-outline" href="${waLink(roomWAMessage(r))}" target="_blank" rel="noopener">${icon("chat")} Enquire on WhatsApp</a>
        </div>
      </div>`;
  }

  function renderRoomGrid(el) {
    el.innerHTML = ROOMS.map(roomCard).join("");
  }

  function renderRoomDetail(el) {
    const id = new URLSearchParams(location.search).get("id");
    const r = ROOMS.find((x) => x.id === id) || (ROOMS.length === 1 || !id ? ROOMS[0] : null);
    if (!r) {
      el.innerHTML = `
        <section class="section container narrow center">
          <p class="eyebrow">Room not found</p>
          <h1>We couldn't find that room</h1>
          <p class="lead">The link may be out of date. Head home or message us on WhatsApp.</p>
          <div class="btn-row center"><a class="btn btn-primary" href="index.html">Back to home</a><a class="btn btn-outline" href="${waLink(GENERAL_MSG)}" target="_blank" rel="noopener">${icon("chat")} WhatsApp</a></div>
        </section>`;
      return;
    }
    document.title = ROOMS.length > 1 ? `${r.name} — ${r.tagline} | ND Stays Greater Noida` : "Our Room | ND Stays Greater Noida";
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", `${r.name} at ND Stays, Greater Noida: ${r.summary}`);

    const others = ROOMS.filter((x) => x.id !== r.id);
    const thumbs = r.photos.map((p, i) => `
      <button type="button" class="rg-thumb${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Show photo ${i + 1}: ${esc(p.alt)}">
        <img src="${p.src}-sm.webp" alt="" loading="lazy" decoding="async" width="160" height="200">
      </button>`).join("");

    el.innerHTML = `
      <section class="room-hero container">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><span aria-current="page">${ROOMS.length > 1 ? esc(r.name) : "Our Room"}</span></nav>
        <div class="room-layout">
          <div class="room-gallery" data-room-gallery>
            <button type="button" class="rg-main" data-open="0" aria-label="Open photo gallery">
              ${picture(r.photos[0].src, r.photos[0].alt, { eager: true, sizes: "(max-width: 900px) 100vw, 55vw" })}
              <span class="rg-zoom">View ${r.photos.length} photo${r.photos.length > 1 ? "s" : ""}</span>
            </button>
            ${r.photos.length > 1 ? `<div class="rg-thumbs">${thumbs}</div>` : ""}
          </div>
          <div class="room-info">
            <p class="eyebrow">${esc(r.tagline)}</p>
            <h1>${esc(r.name)}</h1>
            ${r.description.map((p) => `<p>${esc(p)}</p>`).join("")}
            <p class="best-for"><strong>Well suited to:</strong> ${r.bestFor.map(esc).join(" · ")}</p>

            <h2 class="h4">In this room</h2>
            <ul class="facility-list">${r.facilities.map((f) => `<li>${icon(FAC[f].icon)}<span>${esc(FAC[f].label)}</span></li>`).join("")}</ul>

            ${r.balcony ? `<h2 class="h4">Balcony</h2><p>${esc(r.balcony)}</p>` : ""}

            ${r.bathroom ? `<h2 class="h4">Bathroom</h2><p>${esc(r.bathroom)}</p>` : ""}
            ${r.kitchenette ? `<h2 class="h4">Kitchenette</h2><p>${esc(r.kitchenette)}</p>` : ""}

            <div class="notice">${icon("info")}<p>Rates are shared on enquiry, as they depend on dates and occupancy. Capacity, room size and bed type will be confirmed by ND Stays.</p></div>
          </div>
        </div>
      </section>

      <section class="section section-cream" id="enquiry">
        <div class="container enquiry-panel-wrap">
          <div>
            <p class="eyebrow">Availability enquiry</p>
            <h2>Check your dates</h2>
            <p class="lead">Choose your dates and we'll open WhatsApp with everything filled in. ND Stays will reply with availability and pricing.</p>
            <a class="btn btn-outline" href="${waLink(roomWAMessage(r))}" target="_blank" rel="noopener">${icon("chat")} Just chat instead</a>
          </div>
          <div class="card" data-enquiry data-variant="full" data-room="${r.id}"></div>
        </div>
      </section>

      ${others.length ? `<section class="section container">
        <div class="section-head"><div><p class="eyebrow">Keep exploring</p><h2>Other rooms</h2></div></div>
        <div class="room-grid room-grid-3">${others.map(roomCard).join("")}</div>
      </section>` : ""}`;

    // gallery behaviour
    const items = r.photos.map((p) => ({ src: p.src, alt: p.alt }));
    const main = el.querySelector(".rg-main");
    let current = 0;
    el.querySelectorAll(".rg-thumb").forEach((b) => b.addEventListener("click", () => {
      current = Number(b.dataset.index);
      const p = r.photos[current];
      const img = main.querySelector("img");
      img.src = p.src + ".webp";
      img.srcset = `${p.src}-sm.webp 640w, ${p.src}.webp ${imgSize(p.src)[0]}w`;
      img.alt = p.alt;
      el.querySelectorAll(".rg-thumb").forEach((t) => t.classList.toggle("is-active", t === b));
    }));
    main.addEventListener("click", () => Lightbox.open(items, current, main));
  }

  /* ---------- Amenities ---------- */
  const AMENITIES = [
    { icon: "bed", title: "Furnished bedroom", text: "A comfortable double bed, fresh linen and soft furnishings.", scope: "In the room" },
    { icon: "ac", title: "Air conditioning", text: "Split AC plus a ceiling fan.", scope: "In the room" },
    { icon: "tv", title: "Wall-mounted TV", text: "A TV on a backlit wood panel.", scope: "In the room" },
    { icon: "wardrobe", title: "Wardrobe & storage", text: "Built-in wardrobe for unpacking on longer stays.", scope: "In the room" },
    { icon: "balcony", title: "Balcony", text: "Seating and an open city view.", scope: "With the room" },
    { icon: "fridge", title: "Mini fridge", text: "Keep drinks and snacks cool.", scope: "In the room" },
    { icon: "bath", title: "Bathroom", text: "Washbasin, wall-hung toilet, health faucet and exhaust fan.", scope: "With the room" },
    { icon: "heater", title: "Water heater", text: "Electric water heater for hot water.", scope: "In the bathroom" },
    { icon: "microwave", title: "Kitchenette", text: "Microwave, induction cooktop, sink and glassware.", scope: "With the room" }
  ];
  function renderAmenities(el) {
    el.innerHTML = AMENITIES.map((a, i) => `
      <li class="amenity reveal" style="--d:${(i % 3) * 70}ms">
        <span class="amenity-icon">${icon(a.icon)}</span>
        <div><h3>${a.title}</h3><p>${a.text}</p><span class="scope">${a.scope}</span></div>
      </li>`).join("");
  }

  /* ---------- Location ---------- */
  function renderLocation(el) {
    const hasMap = !!C.mapUrl;
    el.innerHTML = `
      <ul class="loc-list">
        <li>${icon("pin")}<div><strong>${esc(C.city)}, ${esc(C.region)}</strong><span>${esc(C.fullAddress || C.locationReference)}</span></div></li>
        <li>${icon("phone")}<div><strong>Bookings &amp; enquiries</strong><a href="tel:${C.phoneTel}">${esc(C.phoneDisplay)}</a></div></li>
        <li>${icon("insta")}<div><strong>Instagram</strong><a href="${C.instagramUrl}" target="_blank" rel="noopener">${esc(C.instagramHandle)}</a></div></li>
      </ul>
      ${hasMap ? "" : `<p class="loc-note">Contact us for exact directions.</p>`}
      <div class="btn-row">
        ${hasMap ? `<a class="btn btn-primary" href="${esc(C.mapUrl)}" target="_blank" rel="noopener">${icon("pin")} Get directions</a>` : ""}
        <a class="btn ${hasMap ? "btn-outline" : "btn-primary"}" href="${waLink("Hello ND Stays! Could you please share the exact location and directions to the property? Thank you!")}" target="_blank" rel="noopener">${icon("chat")} Ask for directions</a>
      </div>`;
  }

  /* ---------- Gallery ---------- */
  function renderGallery(el) {
    const all = window.ND_GALLERY;
    const cats = window.ND_GALLERY_CATEGORIES;
    const filters = el.querySelector("[data-filters]");
    const grid = el.querySelector("[data-grid]");
    let currentItems = all;

    filters.innerHTML = cats.map((c, i) => {
      const n = c === "All" ? all.length : all.filter((g) => g.cat === c).length;
      return n ? `<button type="button" class="filter${i === 0 ? " is-active" : ""}" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)} <span>${n}</span></button>` : "";
    }).join("");

    const draw = (cat) => {
      currentItems = cat === "All" ? all : all.filter((g) => g.cat === cat);
      grid.innerHTML = currentItems.map((g, i) => `
        <figure class="g-item${g.wide ? " g-wide" : ""}">
          <button type="button" data-index="${i}" aria-label="Open larger: ${esc(g.alt)}">
            ${picture(g.src, g.alt, { sizes: "(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw" })}
          </button>
          <figcaption>${esc(g.cat)}</figcaption>
        </figure>`).join("");
    };
    draw("All");

    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      filters.querySelectorAll(".filter").forEach((f) => { f.classList.toggle("is-active", f === b); f.setAttribute("aria-pressed", String(f === b)); });
      draw(b.dataset.cat);
    });
    grid.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-index]");
      if (b) Lightbox.open(currentItems, Number(b.dataset.index), b);
    });
  }

  /* Lightbox triggers on any [data-lightbox] group (e.g. home mosaic) */
  function wireLightboxGroups() {
    document.querySelectorAll("[data-lightbox]").forEach((group) => {
      const btns = [...group.querySelectorAll("button[data-src]")];
      const items = btns.map((b) => ({ src: b.dataset.src, alt: b.querySelector("img").alt }));
      btns.forEach((b, i) => b.addEventListener("click", () => Lightbox.open(items, i, b)));
    });
  }

  /* ---------- Lightbox ---------- */
  const Lightbox = (() => {
    let dlg, img, cap, counter, items = [], idx = 0, opener = null, touchX = null;
    function build() {
      dlg = document.createElement("dialog");
      dlg.className = "lightbox";
      dlg.setAttribute("aria-label", "Photo viewer");
      dlg.innerHTML = `
        <div class="lb-stage">
          <img alt="">
          <p class="lb-caption"><span class="lb-counter"></span><span class="lb-text"></span></p>
        </div>
        <button type="button" class="lb-btn lb-prev" aria-label="Previous photo">${icon("left")}</button>
        <button type="button" class="lb-btn lb-next" aria-label="Next photo">${icon("right")}</button>
        <button type="button" class="lb-btn lb-close" aria-label="Close photo viewer">${icon("close")}</button>`;
      document.body.appendChild(dlg);
      img = dlg.querySelector("img");
      cap = dlg.querySelector(".lb-text");
      counter = dlg.querySelector(".lb-counter");
      dlg.querySelector(".lb-prev").addEventListener("click", () => go(-1));
      dlg.querySelector(".lb-next").addEventListener("click", () => go(1));
      dlg.querySelector(".lb-close").addEventListener("click", close);
      dlg.addEventListener("click", (e) => { if (e.target === dlg || e.target.classList.contains("lb-stage")) close(); });
      dlg.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      });
      dlg.addEventListener("close", () => { document.body.classList.remove("lb-open"); if (opener) opener.focus(); });
      dlg.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
      dlg.addEventListener("touchend", (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX = null;
      });
    }
    function show() {
      const it = items[idx];
      img.src = it.src + ".webp";
      img.alt = it.alt;
      cap.textContent = it.alt;
      counter.textContent = `${idx + 1} / ${items.length}`;
      const multi = items.length > 1;
      dlg.querySelector(".lb-prev").hidden = !multi;
      dlg.querySelector(".lb-next").hidden = !multi;
      // preload neighbours
      if (multi) [1, -1].forEach((d) => { const n = items[(idx + d + items.length) % items.length]; new Image().src = n.src + ".webp"; });
    }
    function go(d) { idx = (idx + d + items.length) % items.length; show(); }
    function open(list, i, from) {
      if (!dlg) build();
      items = list; idx = i; opener = from || null;
      show();
      document.body.classList.add("lb-open");
      if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
      dlg.querySelector(".lb-close").focus();
    }
    function close() { if (dlg.open) dlg.close(); }
    return { open };
  })();

  /* ---------- Scroll reveal (respects reduced motion) ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((e) => e.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Structured data (verified facts only) ---------- */
  function addStructuredData() {
    if (document.body.dataset.page !== "home") return;
    const data = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: C.brand,
      description: "Premium, comfortable, private and fully furnished stays in Greater Noida.",
      telephone: C.phoneTel,
      image: "images/og-image.jpg",
      address: { "@type": "PostalAddress", addressLocality: C.city, addressRegion: C.region, addressCountry: "IN", ...(C.fullAddress ? { streetAddress: C.fullAddress } : {}) },
      sameAs: [C.instagramUrl],
      ...(C.siteUrl ? { url: C.siteUrl } : {})
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    renderFloatingWA();
    document.querySelectorAll("[data-room-grid]").forEach(renderRoomGrid);
    document.querySelectorAll("[data-room-feature]").forEach(renderRoomFeature);
    document.querySelectorAll("[data-room-detail]").forEach(renderRoomDetail);
    document.querySelectorAll("[data-enquiry]").forEach(mountEnquiryForm);
    document.querySelectorAll("[data-decoration]").forEach(mountDecorationForm);
    document.querySelectorAll("[data-question]").forEach(mountQuestionForm);
    document.querySelectorAll("[data-amenities]").forEach(renderAmenities);
    document.querySelectorAll("[data-location]").forEach(renderLocation);
    document.querySelectorAll("[data-gallery]").forEach(renderGallery);
    wireLightboxGroups();
    wireWhatsAppLinks();
    addStructuredData();
    initReveal();
  });
})();
