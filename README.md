# ElementOS V562 — GitHub Slim Bundle

This repository contains source files only.

## Install and run

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

## Never commit

- `node_modules/`
- `dist/`
- `.env` files
- ZIP archives

These paths are excluded through `.gitignore`.

## Deployment

Vercel installs dependencies from `package-lock.json` and builds the project automatically. Upload the contents of this folder to GitHub, not a previously generated `node_modules` or `dist` directory.
