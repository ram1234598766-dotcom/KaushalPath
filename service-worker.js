const CACHE_NAME = "kaushalpath-shell-v11";
const SHELL_FILES = [
  "/",
  "/index.html",
  "/app.js",
  "/school-chapter-guides.js",
  "/school-humanities-commerce-guides.js",
  "/formula-cheat-sheets.js",
  "/exam-prep-notes.js",
  "/cbse-english-chapter-notes.js",
  "/cbse-commerce-computing-hindi-chapters.js",
  "/jee-neet-chapter-notes.js",
  "/cbse-maths-deep-notes.js",
  "/cbse-physics-chemistry-deep-notes.js",
  "/cbse-biology-deep-notes.js",
  "/cbse-remaining-chapter-notes.js",
  "/study-library.js",
  "/question-bank.js",
  "/local-ai.js",
  "/manifest.webmanifest",
  "/app-icon.svg",
  "/offline.html",
  "/cbse-humanities-computer-deep-notes.js",
  "/ncert-physics-chapter-notes.js",
  "/ncert-chemistry-chapter-notes.js",
  "/ncert-mathematics-chapter-notes.js",
  "/ncert-biology-chapter-notes.js"
];
const STATIC_FILES = new Set([
  "/app.js",
  "/school-chapter-guides.js",
  "/school-humanities-commerce-guides.js",
  "/formula-cheat-sheets.js",
  "/exam-prep-notes.js",
  "/cbse-maths-deep-notes.js",
  "/cbse-physics-chemistry-deep-notes.js",
  "/cbse-biology-deep-notes.js",
  "/cbse-remaining-chapter-notes.js",
  "/study-library.js",
  "/question-bank.js",
  "/manifest.webmanifest",
  "/app-icon.svg",
  "/cbse-humanities-computer-deep-notes.js",
  "/ncert-physics-chapter-notes.js",
  "/ncert-chemistry-chapter-notes.js",
  "/ncert-mathematics-chapter-notes.js",
  "/ncert-biology-chapter-notes.js"
]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key.startsWith("kaushalpath-shell-") && key !== CACHE_NAME)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || request.headers.has("authorization")) return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Never cache API calls, model output, URL-research results, or file uploads.
  if (url.pathname === "/api" || url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).then((response) => {
        if (response && response.ok) {
          const key = url.pathname === "/index.html" ? "/index.html" : "/";
          event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(key, response.clone())));
          return response;
        }
        throw new Error("Navigation request failed.");
      }).catch(async () =>
        (await caches.match(request)) ||
        (await caches.match(url.pathname === "/index.html" ? "/index.html" : "/")) ||
        (await caches.match("/offline.html"))
      )
    );
    return;
  }

  // Only public, fixed-name shell assets are eligible for an offline fallback.
  if (url.search || !STATIC_FILES.has(url.pathname)) return;

  event.respondWith(
    fetch(request).then((response) => {
      if (response && response.ok) {
        event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone())));
        return response;
      }
      throw new Error("Static asset request failed.");
    }).catch(async () =>
      (await caches.match(request)) ||
      new Response("This app resource is not available offline.", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" }
      })
    )
  );
});
