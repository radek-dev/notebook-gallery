# Notebook Gallery

A public portfolio that introduces my projects and links to interactive notebooks and apps.

**Live site:** https://radek-dev.github.io/notebook-gallery/

The site is a static [Astro](https://astro.build) gallery and navigation hub. It does not run Python itself; each project card links out to where the work is hosted:

| Content | Hosted on |
| :-- | :-- |
| Portfolio site | GitHub Pages (built from this repo) |
| [marimo](https://marimo.io) notebooks | [molab](https://molab.marimo.io) previews of public GitHub repos |
| [Streamlit](https://streamlit.io) apps | Streamlit Community Cloud |
| Source code | Public GitHub repositories |

## Commands

Requires Node.js 22.12 or later. Run from the project root:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321/notebook-gallery/` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

Pushing to `main` runs the workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions**.

## Adding a project

Each project card needs a title, short summary, topic tags, thumbnail, and links (write-up, notebook or app, source code). For each project, also describe the question, approach, result, data sources, and limitations.

- **marimo notebook:** keep the `.py` file in a public repo and link to
  `https://molab.marimo.io/github/OWNER/REPO/blob/main/path/to/notebook.py`
  (append `/wasm` for an interactive in-browser version when dependencies allow).
- **Streamlit app:** deploy from a public repo on Streamlit Community Cloud and link to its URL. Keep credentials in the platform's secrets settings, never in the repo.

Before publishing anything, check it for credentials, confidential information, and restricted data.
