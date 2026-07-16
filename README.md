# ElementOS V564 — Vercel npm Repair

Source-only deployment bundle. It excludes `node_modules` and `dist`.

Vercel installation is routed through `scripts/vercel-install.cjs`, which:

1. Deletes any stale file, symlink, or directory named `node_modules`.
2. Uses a fresh cache under `/tmp`.
3. Runs pinned npm 10.8.2 rather than the npm release producing `Exit handler never called`.
4. Installs dependencies before Vite builds the application.

## Required Vercel setting

Project Settings → Build & Development Settings → Install Command must be set to **Use Project Settings / vercel.json**, not an old manual `npm ci` override.

Redeploy once with **Use existing Build Cache** disabled.
