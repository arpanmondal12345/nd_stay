/* =========================================================================
   ND STAYS — ROOM, FACILITIES & GALLERY DATA
   ND Stays has ONE room. Update its name, description, facilities and
   photos here — the website pages are generated from this data.
   (The list format still supports more rooms if one is ever added.)
   ========================================================================= */

/* Facility dictionary. `label` is what guests see; `icon` is from the icon set in main.js. */
window.ND_FACILITIES = {
  bed:        { label: "Double bed & fresh linen", icon: "bed" },
  ac:         { label: "Air conditioning",         icon: "ac" },
  fan:        { label: "Ceiling fan",              icon: "fan" },
  tv:         { label: "Wall-mounted TV",          icon: "tv" },
  wardrobe:   { label: "Wardrobe",                 icon: "wardrobe" },
  desk:       { label: "Work desk & chair",        icon: "desk" },
  fridge:     { label: "Mini fridge",              icon: "fridge" },
  balcony:    { label: "Balcony with city view",   icon: "balcony" },
  kitchenette:{ label: "Kitchenette",              icon: "microwave" },
  bathroom:   { label: "Private bathroom",         icon: "bath" },
  heater:     { label: "Water heater",             icon: "heater" },
  lighting:   { label: "Ambient LED lighting",     icon: "light" },
  lamp:       { label: "Bedside lamp",             icon: "lamp" },
  mirror:     { label: "Backlit vanity mirror",    icon: "mirror" },
  seating:    { label: "Ottoman seating",          icon: "seat" }
};

window.ND_ROOMS = [
  {
    id: "the-room",
    name: "The ND Stays Room",        // TO CONFIRM: owner may prefer another name
    tagline: "Private · Fully furnished · Balcony",
    summary: "One private, fully furnished room with warm lighting, a feature wall, a TV, a mini fridge and a balcony overlooking the city.",
    description: [
      "ND Stays is a single private room, so the space is entirely yours for your stay. Warm cove lighting, wood-finish flooring and a soft upholstered headboard set a relaxed, hotel-like mood.",
      "There's a wall-mounted TV, wardrobe, mini fridge and air conditioning, and a balcony where you can watch the city lights in the evening."
    ],
    cover: "images/rooms/bedroom-blue-wide",
    photos: [
      { src: "images/rooms/bedroom-blue-wide",          alt: "The ND Stays room with blue bedding, marble-effect feature wall and glowing under-bed light" },
      { src: "images/rooms/bedroom-marble-gold-drapes", alt: "Bed with white throw, marble-effect wall, artwork and gold drapes" },
      { src: "images/rooms/bedroom-blue-window",        alt: "Bed beside floor-length curtains and balcony doors" },
      { src: "images/rooms/bedroom-evening-lighting",   alt: "The room in evening mood lighting with artwork above the bed" },
      { src: "images/rooms/bedroom-blue-gold-drapes",   alt: "Bed with blue linen, two ottomans and gold curtains" },
      { src: "images/rooms/bedroom-botanical-mustard",  alt: "Room styled with botanical wallpaper, mustard bedding and a wall TV" },
      { src: "images/rooms/bedroom-botanical-teal",     alt: "Room styled with botanical wallpaper, teal curtains and green throw" },
      { src: "images/interiors/tv-wall-mirror",         alt: "Wall-mounted TV, wardrobe, console and round backlit mirror" },
      { src: "images/interiors/tv-wall-fridge",         alt: "Backlit TV wall with wardrobe and mini fridge" },
      { src: "images/interiors/console-detail",         alt: "Console with fairy-light bottles, flowers and the TV" },
      { src: "images/balcony/balcony-city-night",       alt: "Balcony doors with two chairs and a table overlooking city lights at night" },
      { src: "images/balcony/swing-chair-sunset",       alt: "Balcony with hanging swing chair and a sunset city view" },
      { src: "images/kitchenette/kitchenette-counter",  alt: "Kitchenette with microwave, induction cooktop and glassware" },
      { src: "images/bathroom/bathroom-01",             alt: "Bathroom with stone-look tiles, water heater and vessel basin" },
      { src: "images/bathroom/bathroom-02",             alt: "Bathroom with wall-hung toilet, water heater and mirror" },
      { src: "images/special-occasions/birthday-decoration", alt: "The room decorated for a birthday with balloons, rose petals, candles and cake" }
    ],
    facilities: ["bed", "ac", "fan", "tv", "wardrobe", "desk", "fridge", "balcony", "kitchenette", "bathroom", "heater", "lighting", "lamp", "mirror", "seating"],
    balcony: "A balcony with seating and an open view over Greater Noida — lovely at sunset and at night.",
    bathroom: "Wall-hung toilet with health faucet, vessel washbasin, mirror, exhaust fan and an electric water heater.",
    kitchenette: "Microwave, induction cooktop, sink and glassware for light meals and hot drinks.",
    bestFor: ["Couples", "Solo travellers", "Work trips", "Celebrations"]
  }
];

/* Gallery — every photo on the site. Categories drive the gallery filters. */
window.ND_GALLERY = [
  { src: "images/rooms/bedroom-blue-wide",                cat: "Bedroom",            alt: "Bedroom with blue bedding and glowing under-bed light" },
  { src: "images/rooms/bedroom-botanical-mustard",        cat: "Bedroom",            alt: "Bedroom with botanical wallpaper and mustard bedding" },
  { src: "images/special-occasions/birthday-decoration",  cat: "Special Decorations", alt: "Birthday decoration with balloons, rose petals, candles and cake", wide: true },
  { src: "images/rooms/bedroom-marble-gold-drapes",       cat: "Bedroom",            alt: "Bedroom with marble-effect wall and gold curtains" },
  { src: "images/balcony/swing-chair-sunset",             cat: "Balcony & Views",    alt: "Balcony with hanging swing chair and sunset city view" },
  { src: "images/rooms/bedroom-botanical-teal",           cat: "Bedroom",            alt: "Bedroom with botanical wallpaper and teal curtains" },
  { src: "images/interiors/tv-wall-mirror",               cat: "Interiors",          alt: "TV wall with round backlit mirror" },
  { src: "images/rooms/bedroom-blue-window",              cat: "Bedroom",            alt: "Bed beside floor-length curtains" },
  { src: "images/kitchenette/kitchenette-counter",        cat: "Kitchenette",        alt: "Kitchenette with microwave, induction cooktop and glassware" },
  { src: "images/balcony/balcony-city-night",             cat: "Balcony & Views",    alt: "Balcony with chairs overlooking city lights" },
  { src: "images/rooms/bedroom-evening-lighting",         cat: "Bedroom",            alt: "Bedroom in evening mood lighting" },
  { src: "images/interiors/tv-wall-fridge",               cat: "Interiors",          alt: "Backlit TV wall, wardrobe and mini fridge" },
  { src: "images/bathroom/bathroom-01",                   cat: "Bathroom",           alt: "Bathroom with grey stone-look tiles, water heater and vessel basin" },
  { src: "images/rooms/bedroom-blue-gold-drapes",         cat: "Bedroom",            alt: "Bed with blue linen and ottomans" },
  { src: "images/interiors/console-detail",               cat: "Interiors",          alt: "Console detail with fairy-light bottles and flowers" },
  { src: "images/bathroom/bathroom-02",                   cat: "Bathroom",           alt: "Bathroom with wall-hung toilet, water heater and mirror" }
];

window.ND_GALLERY_CATEGORIES = ["All", "Bedroom", "Interiors", "Bathroom", "Balcony & Views", "Kitchenette", "Special Decorations"];
