import React from "react";
import Head from "next/head";

import { HeaderNavbar, Footer } from "components";

import publicRequest from "utils/requests";

const Layout = ({ props, children }) => (
  <>
    <Head>
      <base href="/" />
    </Head>
    <HeaderNavbar {...props} />
    {children}
    <Footer />
  </>
);

export const getStaticProps = async () => {
  try {
    const res = await publicRequest.get("/page/main-page");
    const data = await res.data;

    return {
      props: data,
    };
  } catch (e) {
    console.log(e);
  }
};

export default Layout;
