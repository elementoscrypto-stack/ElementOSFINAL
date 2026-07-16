# ElementOS V563 — Vercel Install Repair

Source-only GitHub/Vercel bundle.

## Deployment repair

- Uses Node.js 20.x to avoid known npm exit-handler failures seen under some Node 22/24 build environments.
- Vercel removes any stale `node_modules` file, symlink, or directory before installation.
- Uses `npm install` with the committed lockfile rather than forcing `npm ci`.
- Contains no `node_modules` or `dist`.

## Required one-time Git cleanup

Run these from the repository root before pushing this version:

```bash
git rm -r --cached node_modules 2>/dev/null || true
rm -rf node_modules dist
git add -A
git commit -m "Remove generated dependencies and repair Vercel install"
git push
```

Then redeploy on Vercel with **Use existing Build Cache unchecked**.
