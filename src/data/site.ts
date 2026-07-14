// -----------------------------------------------------------------------------
// Avastar Dressage — single source of truth for business + site metadata.
// Update contact details or nav here and every page follows.
// -----------------------------------------------------------------------------

export const site = {
  name: "Avastar Dressage",
  tagline: "Dressage training & full-care boarding at Lepore Farm",
  established: 2008,
  location: "Lincoln, Rhode Island",
  farm: "Lepore Farm",
  url: "https://cassie-lyn.github.io/JennWebsite", // GitHub Pages; swap for a custom domain later

  phone: {
    display: "(401) 595-2217",
    href: "tel:+14015952217",
  },
  email: "dozerjune1@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100036658197230",

  address: {
    line1: "Lepore Farm",
    line2: "545 Angell Rd",
    city: "Lincoln",
    state: "RI",
    zip: "02865",
    country: "United States",
  },
} as const;

// Prefix a root-relative path with the configured base (e.g. /JennWebsite on
// GitHub Pages). Use for every internal href and public/ asset URL.
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Boarding", href: "/boarding" },
  { label: "Training", href: "/training" },
  { label: "Facility", href: "/facility" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const mapEmbed =
  "https://www.google.com/maps?q=545+Angell+Rd,+Lincoln,+RI+02865&output=embed";
