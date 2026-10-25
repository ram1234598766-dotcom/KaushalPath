# KaushalPath Smart System

This API is integrated into the existing `kaushalpath` Worker. `/api/study-guide` remains on its original handler; `/api/v2/*` routes to `smart-system/worker.js`. Do not deploy a second Worker for this feature.

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
The D1 database and KV namespace are bound to the existing `kaushalpath` Worker. The root `wrangler.toml` is the canonical config and targets that same Worker; the nested config mirrors its bindings for convenience. Install Wrangler 4, then run:
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
  workerBaseUrl: "https://kaushalpath.kaushalpath.workers.dev"
});
const matrix = await smart.getWeaknessMatrix();
const task = await smart.createSmartPlannerTask();
```
Do not call analytics submission without an explicit opt-in, and submit only newly completed attempts to avoid double counting. CORS is not authentication. The analytics route is also bound to a simple 30-requests-per-minute edge limiter; monitor abuse before broad public launch.
