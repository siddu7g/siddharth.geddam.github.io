# Siddhartha Geddam — Portfolio

Dev-oriented portfolio website with a dark purple and blue theme.

**Live site:** [https://siddu7g.github.io](https://siddu7g.github.io) (after GitHub Pages deploy)

## Pages

- **Home** — Profile photo, about, latest achievements, coursework
- **Research** — Research gallery, SmartNet Lab portal, Fly4Future & WiBotic projects
- **COAST Autonomous** — Summer 2025 AI/ML robotics internship
- **ML / AI** — Deep learning and perception projects
- **Robotics & UAV** — Simulation, ArduPilot, AirSim, and embedded builds

## Add Your Photos

Place images in `public/images/` — see [public/images/README.md](public/images/README.md) for filenames.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy to GitHub Pages

1. Create a repo named **`siddu7g.github.io`** (user site) or any repo name (project site).
2. Push this project to the repo.
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

### Project site (not user site)

If your repo is named something other than `siddu7g.github.io`, update `base` in `vite.config.ts`:

```ts
base: '/your-repo-name/',
```

Then redeploy. Your site will be at `https://siddu7g.github.io/your-repo-name/`.

## Build

```bash
npm run build
npm run preview
```
