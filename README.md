# Karan Jagani — Portfolio

A React and Vite portfolio with a restrained monochrome design, responsive project cards, category filtering, accessible project dialogs, and reduced-motion support. The existing Home, About, Projects, Experience and Contact sections use hash navigation.

## Run locally

Use Node.js 22.12+ (or 20.19+) and npm.

```sh
npm ci
npm run dev
```

Dependencies are already installed in this checkout; `npm run dev` is enough to start. Open the Local URL printed by Vite.

```sh
npm run lint
npm run build
npm run preview
```

## Content and structure

- `src/config/siteData.js`: biography, education, skills, experience and all six projects.
- `src/pages/`: existing portfolio sections.
- `src/components/layout/`: navigation, main layout and footer.
- `src/components/ui/`: shared reveal wrapper, skills, timeline and project cards.
- `src/index.css` and `tailwind.config.js`: visual system and accessibility styles.
- `public/Karan_Jagani_CV.pdf`: downloadable CV. Replace this file with the updated graduate CV; the existing PDF contains outdated student information.
- `public/Homepage.png`: historical screenshot of the previous design; retained as a reference, not used as a current preview.

WattFlow is a portfolio demonstration with simulated supplier quotes and no public deployment. Projects without repository or demo URLs do not render placeholder links. Existing topic illustrations are decorative, not product screenshots. Project categories are explicit to avoid accidental keyword matches.

## Hosting configuration

`vercel.json` provides an SPA fallback for extensionless nested URLs while retaining asset paths. The site itself uses section hashes, rather than separate page routes. No deployment is needed to review these changes locally.

## Information to confirm

- Student Ambassador end date.
- Updated CV PDF (and optionally the retained DOCX source).
- Repository/demo URLs for Leaf Morphometric Analysis, Multi-Modal AI Analysis, Together Culture and Integrated Software Solution.
- Existing project outcome claims (including leaf segmentation accuracy/latency and the Multi-Modal publication statement) are inherited content, not independently verified.

The refinement was initially completed locally. The owner subsequently authorized committing and pushing the changes to the existing GitHub remote. No deployment command is part of this workflow.

WattFlow's supplied GitHub URL returned HTTP 404 during public checks. Its URL is retained in siteData; set githubUnavailable to false after confirming repository access. LinkedIn blocked automated checks (HTTP 999); its existing URL is preserved.
