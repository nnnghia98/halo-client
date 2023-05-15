import { Layout } from "modules";

import "styles/globals.scss";
import "nprogress/nprogress.css";
import ogImage from "assets/img/og_image.jpg";
import dynamic from "next/dynamic";
import { getSetting } from "utils/common";

const TopProgressBar = dynamic(
  () => {
    return import("components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  const appKeywords = getSetting("app_keywords");
  const appDescription = getSetting("app_description");
  const appTitle = getSetting("app_title");
  const siteName = getSetting("site_name");
  const ogUrl = getSetting("og_url");
  return (
    <Layout>
      <meta name="description" content={appDescription} />
      <meta name="keywords" content={appKeywords} />
      <meta name="robots" content="noodp,index,follow" />
      <meta name="revisit-after" content="1 days" />
      <meta property="og:title" content={appTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage.src} />
      <meta property="og:description" content={appDescription} />
      <TopProgressBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
