# 🚀 Deployment Status Report - mkf-website

**Date**: July 15, 2026
**Project**: mkf-website (Next.js 15.1.3, downgraded from 16.2.10)
**Target**: Namecheap cPanel Shared Hosting (LiteSpeed + CloudLinux Node.js Selector)
**Status**: ✅ **LIVE** — https://mamakevinafoundation.com (verified 200 on `/`, `/about`, `/contact`, `/work`)

---

## Final Working Configuration

| Setting | Value |
|---|---|
| Application root | `/home/mamabzbt/repositories/mkf-website` |
| Application URL | `mamakevinafoundation.com` |
| **Application startup file** | `.next/standalone/server.js` |
| Node.js version | 20 |
| Application mode | `production` |

`RESEND_API_KEY` and `NODE_ENV` are set as real environment variables in cPanel's Node.js app config (not the `.env` file, which still holds a placeholder key).

## What Was Non-Obvious About This Deployment

1. **`node_modules` must be a symlink, never a real directory.** CloudLinux's Node.js Selector refuses `npm install` if `node_modules` in the app root isn't a symlink to `~/nodevenv/.../lib/node_modules`.
2. **npm silently omits devDependencies by default here** (`omit=["dev"]`) — `@tailwindcss/postcss`, `typescript`, etc. never installed until running `npm install --include=dev` explicitly. This caused two different build failures before being caught.
3. **Next.js 16's Turbopack can't build through that symlink** (`Symlink [project]/node_modules is invalid, it points out of the filesystem root` — a Turbopack bug/limitation). Fix: downgraded to **Next.js 15.1.3**, which uses webpack/SWC for `next build` and handles the symlink fine.
4. **The build hits the host's thread/process ulimits** (`pthread_create: Resource temporarily unavailable`) unless constrained. Fixed via `experimental.cpus: 1` and `experimental.workerThreads: false` in `next.config.ts`.
5. **`eslint-config-next` v15's exports need explicit `.js` extensions** in `eslint.config.mjs` imports (v16's extensionless export map doesn't apply). Lint is also skipped during build (`eslint.ignoreDuringBuilds: true`) — run linting as a separate step if needed.
6. **`output: "standalone"` changes the correct startup file.** The originally-documented `node_modules/.bin/next` is wrong for standalone builds — cPanel/Passenger must point directly at `.next/standalone/server.js` (it reads `process.env.PORT`, matching cPanel's convention). `.next/static` and `public/` must be copied into `.next/standalone/` manually after every build — Next.js does not do this automatically.
7. **The webserver here is LiteSpeed.** Passenger-style `touch tmp/restart.txt`, and even clicking **Restart** in cPanel's UI, do not reliably kill the actual serving worker — it keeps running under the process name **`next-server (v15.1.3)`**, not `lsnode`/`node` (a plain `grep -i node` on `ps aux` misses it, since "next" doesn't contain "node" as a substring). Find it with `ps -U <user> -o pid,lstart,cmd | grep next-server` and `kill -9` every PID listed (there can be more than one stale one accumulated across restarts) to force a clean respawn on the next request. A quick way to confirm you're still on a stale worker: request a path that must be dynamic, like a 404 (`/definitely-missing-xyz`) — if that responds correctly but the homepage content is old, the process is alive but serving a pre-rebuild static HTML snapshot.

## Redeploy Procedure (for future changes)

```bash
# 1. On your machine: commit & push
git push origin main

# 2. On the server via SSH:
cd ~/repositories/mkf-website
git pull origin main   # if tsconfig.json conflicts with a local auto-edit from a prior build, `git checkout -- tsconfig.json` first (Next.js rewrites it on every build; harmless to discard)
rm -rf .next
~/nodevenv/repositories/mkf-website/20/bin/npm install --include=dev   # only if package.json/package-lock.json changed
~/nodevenv/repositories/mkf-website/20/bin/npm run build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
touch tmp/restart.txt

# 3. Always force a clean respawn — restart.txt / cPanel's Restart button are not reliable alone:
ps -U mamabzbt -o pid,lstart,cmd | grep next-server   # find every stale worker PID
kill -9 <PID> [<PID> ...]                              # LiteSpeed spawns a fresh one on the next request
```

## Outstanding Items

- `.env` / `.env.production` on the server still contain a **placeholder** `RESEND_API_KEY` — this is harmless since cPanel's own env vars (which have the real key) take precedence at runtime, but worth cleaning up for clarity.
- 2 npm audit vulnerabilities (1 moderate, 1 critical) reported by `npm install` — not investigated; run `npm audit` on the server to review before addressing.
- Next.js 15.1.3 has a known CVE (see `npm install` deprecation warning, referencing CVE-2025-66478) — worth planning an upgrade to a patched 15.x release when convenient.
