import React from "react";
import Head from "next/head";

const HeadTitle = ({ title }) => (
  <Head>
    <base href="/" />
    <title>{title}</title>
  </Head>
);

export default HeadTitle;
