import React from "react";
import Link from "next/link";

// import "./styles.scss";
import styles from "./HalolightingLogo.module.scss";

const HalolightingLogo = () => (
  <picture className={styles.logo}>
    <Link href="/">
      <span className={styles.logo__pre}>HALO</span>{" "}
      <span className={styles.logo__post}>lighting</span>
    </Link>
  </picture>
);

export default HalolightingLogo;
