# KaushalPath Smart System

This is a separately deployed Cloudflare Worker API. It does not replace the existing `kaushalpath` frontend Worker.

## Privacy split
- IndexedDB/localStorage: raw progress, wrong answers, notes, planner entries, Pomodoro state, and local weakness calculations.
- Workers KV: only global public static catalog data.
- D1: shared question records and aggregate correctness counters. No student IDs, IPs, timestamps per attempt, or per-student rows are stored.

Benchmarks describe **recorded attempts**, not unique students. The Worker hides results until at least 20 attempts are recorded.

## Endpoints
- `GET /api/v2/syllabus?class=12&subject=physics`
- `GET /api/v2/formulas?class=12&subject=chemistry`
- `POST /api/v2/analytics/submit-attempt` with a bare array of `{question_id,is_correct}`
- `GET /api/v2/analytics/benchmarks?subject=Physics&chapter=...&topic=...`

## Deploy
The production D1 database and KV namespace are pre-created and wired in `wrangler.toml`. Install Wrangler 4, then run:
```sh
npm install
npm run typecheck
npm run deploy
```
Apply the schema migration with `npm run db:apply:remote`. Seed data is illustrative only; replace it with your reviewed curriculum catalog and licensed question bank.

## Client integration
Import `client/smartSystem.ts` in the application build and pass the actual IndexedDB connection plus real attempt/planner object-store names:
```ts
const smart = createSmartSystem({
  db: existingDatabase,
  attemptsStore: "YOUR_ATTEMPT_STORE",
  plannerStore: "YOUR_PLANNER_STORE",
  workerBaseUrl: "https://kaushalpath-smart-system.kaushalpath.workers.dev"
});
const matrix = await smart.getWeaknessMatrix();
const task = await smart.createSmartPlannerTask();
```
Do not call analytics submission without an explicit opt-in, and submit only newly completed attempts to avoid double counting. CORS is not authentication; add rate limiting and abuse monitoring before broad public launch.
