import React from "react";
import Head from "next/head";

const HeadTitle = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title}/>
  </Head>
);

export default HeadTitle;
