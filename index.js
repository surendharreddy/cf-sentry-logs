import Toucan from "toucan-js";

const sentryDsn = process.env.SENTRY_DSN;
let sentry;

addEventListener("fetch", event => {
  sentry = new Toucan({
    dsn: sentryDsn,
    context: event,
    allowedHeaders: ["user-agent"],
    allowedSearchParams: /(.*)/,
    debug: false,
    rewriteFrames: {
      root: "/",
    },
    environment: process.env.ENVIRONMENT,
    release: process.env.SENTRY_RELEASE,
  });

  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  sentry.captureMessage(`Hi, Sentry!`);
  return new Response(`Hello from ${process.env.ENVIRONMENT}!`, {
    headers: { "content-type": "text/plain" },
  });
}
