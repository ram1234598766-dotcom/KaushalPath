# Vercel deployment checklist

KaushalPath is configured for Vercel. Static site files live in `public/`; the server-side AI endpoint is `api/study-guide.mjs`.

## Deploy

1. Open [Vercel New Project](https://vercel.com/new), import `ram1234598766-dotcom/KaushalPath` from GitHub, and choose `main` as the production branch.
2. Set the project root to the repository root. Use the included `vercel.json`, which publishes `public/` and runs `npm test`.
3. In **Project Settings → Environment Variables**, add `GEMINI_API_KEY` with a key from [Google AI Studio](https://aistudio.google.com/app/apikey). Enable it for Production and Preview as needed. Keep its value secret.
4. Deploy or redeploy after configuring the environment variable.
5. Check the API setup with a GET request to `/api/study-guide` and the `x-kaushalpath-status: 1` header. Then submit a real question in the AI Study Guide to verify inference.

## Verify after deployment

- The homepage and workspace sections load on desktop and mobile.
- The AI Study Guide answers a short prompt.
- Live search and public URL reading work when supported by the selected model and API key.
- A practice test can be completed and reviewed.
- CSV/JSON result exports and browser print-to-PDF work.
- Vercel function logs show no unhandled errors.

## Local quality checks

Use Node.js 22+:

```sh
npm install
npm test
node --check public/app.js
node --check api/study-guide.mjs
```

Do not commit secrets, access tokens or local `.env` files. Monitor usage; hosting on a free tier does not make model usage unlimited. Built-in exam questions are original practice samples, not a verified archive of official previous-year questions.
