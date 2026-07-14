# Avastar Dressage — Website

Marketing website for **Avastar Dressage**, a full-service dressage training and
boarding barn at Lepore Farm in Lincoln, Rhode Island.

Built with [Astro](https://astro.build) (static output), [Tailwind CSS v4](https://tailwindcss.com),
and self-hosted [Fontsource](https://fontsource.org) fonts (Fraunces + Inter).
All photos are optimized at build time via `astro:assets`.

## Getting started

You'll need Node 18.20+ (this project was built on Node 24). From the project root:

```sh
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the production site to ./dist/
npm run preview  # preview the production build locally
```

The site is fully static — deploy the contents of `./dist/` to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

## Where the content lives

| What | Where |
| :--- | :--- |
| Pages (Home, Boarding, Training, Facility, About, Contact) | `src/pages/*.astro` |
| Shared layout, `<head>` / SEO, header, footer | `src/layouts/Layout.astro` |
| Reusable components (banner, split sections, CTA band, quotes…) | `src/components/` |
| Business info — phone, email, address, nav, map | `src/data/site.ts` |
| Design tokens (colors, fonts) + base styles | `src/styles/global.css` |
| Photos (imported + optimized) | `src/assets/photos/` |
| Ambient "ride out" video | `public/videos/field-riding.mp4` |
| Favicon (cream "A" monogram) | `public/favicon.svg` |

**To update contact details** (phone, email, address, Facebook, or the site
domain used for canonical/Open Graph URLs), edit `src/data/site.ts` and
`astro.config.mjs` (`site`). Every page reads from there.

## Design system

- **Palette:** deep navy (`--color-navy`), warm cream / oat page backgrounds
  (`--color-cream`, `--color-oat`), and a brass / saddle-leather accent
  (`--color-brass`, `--color-brass-deep`). Defined as Tailwind `@theme` tokens in
  `src/styles/global.css`.
- **Type:** Fraunces (display serif) for headings, Inter for body/UI.

## Contact form — wiring up a backend later

The contact form (`src/pages/contact.astro`) is **not connected to a backend yet.**
As a stopgap it opens the visitor's email app with a pre-filled message to
`dozerjune1@gmail.com` (handled by the small `mailto` script at the bottom of the
file). To collect submissions server-side instead, pick one of these and remove
the `mailto` script:

- **[Formspree](https://formspree.io):** set the form to
  `action="https://formspree.io/f/XXXXXXXX" method="POST"` and give each field a
  `name` (they already have names).
- **[Netlify Forms](https://docs.netlify.com/forms/setup/):** add the `netlify`
  attribute (and a hidden `<input type="hidden" name="form-name" value="contact" />`)
  to the `<form>`. Works automatically when hosted on Netlify.
- **[Web3Forms](https://web3forms.com):** set
  `action="https://api.web3forms.com/submit" method="POST"` and add a hidden
  `<input type="hidden" name="access_key" value="YOUR_KEY" />`.

The exact spot to swap is marked with a comment above the `<form>` element.

## Notes

- The Google Maps embed on the Contact page uses a public `output=embed` URL — no
  API key required.
- The `site` value in `astro.config.mjs` is a **placeholder domain**
  (`https://www.avastardressage.com`). Update it to the real domain before launch
  so canonical links and social-share (Open Graph) images resolve correctly.
