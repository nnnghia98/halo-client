import { Layout } from "modules";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
import * as Sentry from "@sentry/nextjs";

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_DNS,
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

const TopProgressBar = dynamic(
  () => {
    return import("components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <TopProgressBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
