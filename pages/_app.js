import { Layout } from "modules";

import "styles/globals.scss";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

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
