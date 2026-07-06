# Ubuntu Portfolio

A single monorepo portfolio that mimics an Ubuntu 22.04 GNOME desktop: lock screen, live clock, dock, Activities launcher, draggable windows, terminal commands, file browser, project views, and a contact form backed by Express.

## Structure

```text
ubuntu-portfolio/
├── client/          # React + Tailwind + Vite
├── server/          # Express + MongoDB API
└── scripts/         # Local asset generation
```

## Run Locally

```bash
npm install
npm run dev
```

The frontend runs at `http://localhost:5180`.
The API runs at `http://localhost:5181`.

The lock screen accepts any password. Press `Enter` or click the arrow to unlock.

## MongoDB

Copy `.env.example` to `.env` and adjust values if needed:

```bash
cp .env.example .env
```

Seed MongoDB after it is running:

```bash
npm run seed
```

If MongoDB is not available, the API serves the bundled fallback portfolio data and stores contact messages in memory for the current server session.

## Useful Scripts

```bash
npm run dev             # client and server together
npm run dev:client      # Vite only
npm run dev:server      # Express only
npm run build           # production frontend build
npm run asset:wallpaper # regenerate the PNG wallpaper
```

## Managing Projects

Run `node scripts/addProject.js` to add or update a project, after editing the object at the top of the file or `scripts/projects-to-add.json` first.
