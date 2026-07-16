# ElementOS V561 Install Fix

This patch hardens Vercel dependency installation.

- Pins Node.js 22.x and npm 10.x.
- Uses deterministic `npm ci --no-audit --no-fund`.
- Removes `--prefer-online`.
- Adds conservative npm retry and offline-cache settings.
- Preserves all V560 application code and visual styling.

If Vercel still shows the previous install command, open Project Settings → Build & Development Settings and disable any dashboard-level Install Command override, or set it to `npm ci --no-audit --no-fund`.
