import { HeaderNavbar, Footer } from "components";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
