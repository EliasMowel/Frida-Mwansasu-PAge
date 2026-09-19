# Frida Mwansasu Legal Portfolio

Official personal portfolio website for Frida Mwansasu, a legal practitioner based in Dar es Salaam.

The site presents Frida's professional profile, areas of practice, legal services, and consultation contact details in a responsive one-page experience.

## Live Repository

[GitHub repository](https://github.com/EliasMowel/Frida-Mwansasu-PAge)

## Technology

- Vite
- HTML
- CSS
- JavaScript
- Google Fonts

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`.

### Create a production build

```bash
npm run build
```

The optimized website is generated in the `dist/` directory.

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   └── robots.txt       Search-engine crawling rules
├── src/
│   ├── main.js          Page markup and scroll interactions
│   └── style.css        Theme, layout, responsive styles, and animation
├── index.html            SEO metadata and application entry point
├── package.json          Project scripts and dependencies
└── README.md             Project documentation
```

## Main Features

- Formal legal-practice visual identity
- Responsive desktop and mobile layouts
- Sticky navigation with active section states
- Scroll progress indicator
- Smooth anchor navigation
- Scroll-triggered section and project reveals
- Reduced-motion accessibility support
- SEO title, description, Open Graph metadata, and `robots.txt`
- Consultation-focused contact actions

## Updating Client Content

The current site contains approved structure with placeholder professional details. Before launch, update the following:

1. Replace the portrait artwork in `src/style.css` with Frida's approved professional photograph.
2. Update the legal practice descriptions and service copy in `src/main.js`.
3. Replace `hello@fridamwansasu.com` with the client's confirmed email address.
4. Replace the LinkedIn and professional profile links with the client's real URLs.
5. Confirm the legal title, location, admission details, and practice areas with the client.
6. Update the title and description in `index.html` if the client's final professional positioning changes.
7. Replace the footer year if the site is launched in a different year.

## Publishing

After building the project, publish the contents of `dist/` using a static hosting service such as Netlify, Vercel, or Cloudflare Pages.

For GitHub Pages, configure the Vite `base` option to match the repository path before publishing. For this repository, the project path is `/Frida-Mwansasu-PAge/`.

Once the final domain is connected:

1. Verify the site is publicly accessible.
2. Register the domain in [Google Search Console](https://search.google.com/search-console).
3. Submit the site's sitemap when one is added.
4. Confirm the title, description, mobile layout, and contact links in Google's URL inspection tool.

## Validation

Run the production build before publishing:

```bash
npm run build
```

The build should complete without errors and produce the `dist/` directory.
