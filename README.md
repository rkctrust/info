# Radha Krishna Charitable Trust website

## Repository structure

- `index.html` — website home page.
- `story.html` — video-informed story-page template.
- `assets/` — styles, bilingual site logic and approved website images.
- `about.html`, `service.html`, `girish.html` — compatibility redirects to the relevant home-page sections.

## Preview

Open `index.html` in a browser. No build system or packages are needed.

## Deploy with GitHub Pages

This repository deploys automatically to GitHub Pages whenever changes are pushed to the `main` branch. The workflow in `.github/workflows/deploy-pages.yml` publishes the repository's static site files.

The site is configured to use the custom domain `www.radhakrishnacharitabletrust.org` (see `CNAME`). In the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source. Configure the domain's DNS to point to GitHub Pages as described in GitHub's custom-domain documentation. Once Pages is enabled and DNS is set, each push to `main` triggers a deployment.

## Before publishing

Add an approved contact method, registration facts and donation URL only once the Trust provides them. The site deliberately does not claim meal counts, schedule, 80G/FCRA status, or other unverified details.
