# Trably Events

A modern events platform to discover, sell, and manage tickets with a fast, accessible UI and secure authentication.

## Overview
- Clean event pages with hero, details, ticket sidebar, and producer info.
- Checkout flow with countdown reservation, order summary, and payment options UI.
- Auth via NextAuth (Google), dark/light theme toggle, responsive navbar and footer.

## Key Features
- **Featured Events:** Curated grid with title, city, and date.
- **Event Page:** Banner, schedule/location, ticket CTA, and organizer card.
- **Checkout:** Live countdown to hold tickets; clear release message when it expires.
- **Auth:** OAuth through Google; shadcn UI login form with validation.
- **UI System:** shadcn/ui components, Tailwind v4, and theme switcher.

## Tech Stack
- **Framework:** Next.js 15, React 19, TypeScript
- **UI:** shadcn/ui, Tailwind CSS, lucide-react
- **Data:** Drizzle ORM
- **API:** tRPC
- **Auth:** NextAuth
- **Infra (local):** Postgres + Redis via Docker Compose

## Quickstart
1) Environment
```bash
cp .env.example .env
# Fill in NextAuth and database vars
# AUTH_SECRET=...
# AUTH_GOOGLE_ID=...
# AUTH_GOOGLE_SECRET=...
# Optional inbound ports used by docker-compose
# POSTGRES_PORT=5432
# REDIS_PORT=6379
```

2) Start services
```bash
docker compose up -d
```

3) Database (Drizzle)
```bash
bun run db:push
# or: yarn db:push
```

4) Dev server
```bash
bun run dev
# or: yarn dev
```

## Scripts
- `dev`: Run Next.js in Turbopack mode
- `build` / `start`: Build and serve
- `db:generate` / `db:migrate` / `db:push` / `db:studio`: Drizzle kit
- `lint` / `format:*` / `typecheck`: Quality gates

## Project Structure
- `src/app` — routes and pages
  - `/` homepage with search and Featured Events
  - `/login` shadcn-based login
  - `/event/[slug]` event details
  - `/event/[slug]/checkout` checkout with countdown
- `src/components` — reusable components
  - `navbar`, `footer`, `featured-events`
  - `components/event/*` widgets (tickets sidebar, counter)
  - `components/ui/*` shadcn ui primitives
- `src/server` — tRPC routers and auth config
- `src/db` — Drizzle schema and client

## Docker Compose
- Postgres `postgres:16-alpine` and Redis `redis:7-alpine`
- Ports are configurable via `.env`: `POSTGRES_PORT`, `REDIS_PORT`
- Start/stop:
```bash
docker compose up -d
docker compose down
```

## Notes
- Theme switching uses `next-themes` with class strategy in `src/app/layout.tsx`.
- For OAuth, set `AUTH_SECRET`, `AUTH_GOOGLE_ID`, and `AUTH_GOOGLE_SECRET` in `.env`.

## License
This repository is for demonstration and internal use. Add a license if you plan to distribute.
