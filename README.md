# Notebook Gallery

A public portfolio that introduces my projects and links to interactive notebooks and apps.

**Live site:** https://radek-dev.github.io/notebook-gallery/

The site is a static [Astro](https://astro.build) gallery and navigation hub. It does not run Python itself; each project card links out to where the work is hosted:

| Content | Hosted on |
| :-- | :-- |
| Portfolio site | GitHub Pages (built from this repo) |
| [marimo](https://marimo.io) notebooks | [molab](https://molab.marimo.io) previews of public GitHub repos ([marimo-notebooks](https://github.com/radek-dev/marimo-notebooks)) |
| [Quarto](https://quarto.org) notebooks | GitHub Pages ([quarto-notebooks](https://github.com/radek-dev/quarto-notebooks)) |
| [Streamlit](https://streamlit.io) apps | Streamlit Community Cloud ([streamlit-apps](https://github.com/radek-dev/streamlit-apps)) |
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

Add an entry to `src/data/projects.ts`, and put its thumbnail in `public/thumbnails/`. Each project needs a title, short summary, topic tags, thumbnail, and links (notebook or app, source code). For each project, also describe the question, approach, result, data sources, and limitations.

- **marimo notebook:** keep the `.py` file in a public repo and link to
  `https://molab.marimo.io/github/OWNER/REPO/blob/main/path/to/notebook.py`
  (append `/wasm` for an interactive in-browser version when dependencies allow).
- **Quarto notebook:** render it in the Quarto repo (`uv run quarto render`), publish with GitHub Pages and link to the page URL.
- **Streamlit app:** deploy from a public repo on Streamlit Community Cloud and link to its URL. Keep credentials in the platform's secrets settings, never in the repo.

Every Python project repo is managed with [uv](https://docs.astral.sh/uv/): commit `pyproject.toml` and `uv.lock` so visitors can reproduce it with `uv sync`.

Before publishing anything, check it for credentials, confidential information, and restricted data.
