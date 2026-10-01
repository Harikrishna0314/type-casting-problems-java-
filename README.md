# Aerodrive

A portfolio-ready aircraft encyclopedia combining structured aircraft data, a Spring Boot API, an interactive React Three Fiber viewer, and a side-by-side comparison lab.

## Six-stage build

1. **Frontend foundation** — aviation-themed Next.js app, responsive layout, explorer and aircraft cards.
2. **API/data layer** — Spring Boot REST API with searchable, filterable aircraft data plus categories, manufacturers, compare and health endpoints.
3. **3D exploration** — interactive React Three Fiber viewer with category-aware procedural aircraft forms, orbit controls and auto-rotation.
4. **Encyclopedia flows** — full aircraft detail pages, histories, variants, key facts, category browser and comparison lab.
5. **Portfolio polish** — consistent visual system, responsive behavior, empty states, fallback data, metadata and developer-friendly structure.
6. **Delivery** — production scripts, GitHub Actions CI, Docker setup, runbook and final verification.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS 4
- React Three Fiber + Drei + Three.js
- Java 21 + Spring Boot 3
- REST API
- GitHub Actions CI

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000

### Backend

On a machine with Java 21 and Maven installed:

```bash
cd backend
mvn spring-boot:run
```
The API runs on http://localhost:8080 and exposes:

- `GET /api/aircraft`
- `GET /api/aircraft?q=boeing`
- `GET /api/aircraft/{slug}`
- `GET /api/categories`
- `GET /api/manufacturers`
- `GET /api/compare?slugs=boeing-787-dreamliner,rafale`
- `GET /api/health`

The frontend automatically falls back to the bundled aircraft dataset when the API is not running, so the UI can still be explored standalone.

## Production build

```bash
cd frontend
npm run build
npm run start
```

## Portfolio talking points

This project demonstrates Server Components, client-side filtering, REST API design, fallback data handling, dynamic routes, static params, 3D rendering, responsive UX, and CI configuration. A later production phase could move the seed data into PostgreSQL/Supabase and replace the procedural 3D stand-ins with licensed GLB/GLTF assets.
