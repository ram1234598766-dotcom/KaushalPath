# Netlify deployment checklist

This repository is configured for a Netlify Git-connected deployment.

1. In Netlify, connect the GitHub repository `ram1234598766-dotcom/KaushalPath` and use `main` as the production branch.
2. Netlify reads `netlify.toml`; publish directory is `public`, functions directory is `netlify/functions`, and Node is set to 22.
3. Root `package.json` defines `npm test` as a smoke test. Netlify's static publish does not need a framework build command.
4. After each push to the production branch, check the Deploys tab for the current build and published URL.
5. AI study guide is served from `/api/study-guide`. The function uses the Netlify AI Gateway through the Google GenAI SDK; enable AI Features for your team and run at least one successful production deployment. AI has cost/usage limits.
6. Test /api/study-guide status in the deployed site. If it says AI setup is needed, confirm AI Features are enabled on the team and the deploy is production, not only a Deploy Preview.
7. Run `npm install` and `npm test` locally with Node 22+ before large changes.
8. Do not commit secrets, access tokens, local `.env` files, or `.netlify/state.json`.
9. After deploying, test study navigation, a practice test, answer review, CSV/JSON downloads, print-to-PDF, mobile layout and AI failure handling.
10. The built-in exam questions are original sample questions, not a verified archive of authentic PYQs. Use linked official sources for official papers and current notices.
