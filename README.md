# ElementOS V565 — Inline Vercel Install Repair

This source-only bundle removes the fragile folder-based install hook. Vercel now runs the full repair inline from `vercel.json`, so no `scripts/` path is required.

## Required Vercel settings

- Node.js Version: **20.x**
- Install Command override: **Disabled**
- Build Command override: **Disabled**
- Redeploy without existing build cache

The repository must be uploaded with its folder structure intact. Do not upload individual files over an existing repository without deleting stale generated entries.
