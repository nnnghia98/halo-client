import React, { useState, useEffect } from "react";
import get from "lodash/get";
import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

import { DEFAULT_ROUTES } from "utils/constants";

import HalolightingLogo from "../HalolightingLogo";
import hamburgerIcon from "assets/svg/hamburgerIcon.svg";

import styles from "./HeaderNavbar.module.scss";

const HeaderNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const config = getConfig();
  const routes = get(config, "publicRuntimeConfig.routes", DEFAULT_ROUTES);

  const menuItems = (
    <>
      {routes.map((route) => (
        <li key={route.title}>
          <Link href={`/${route.slug}`}>{route.title.toUpperCase()}</Link>
        </li>
      ))}
    </>
  );

  const triggerDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className={styles.navbar} id={styles.mainHeader}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <span className={styles.navbar__logo__text}>
            <HalolightingLogo />
          </span>
        </div>
        <div className={styles.navbar__items}>
          <div className={styles.navbar__items__horizontal}>
            <ul>{menuItems}</ul>
          </div>
          <div className={styles.navbar__items__vertical}>
            <Image
              className={styles.navbar__hamburger}
              src={hamburgerIcon}
              alt="hamburgerIcon"
              width={25}
              onClick={triggerDropdown}
            />
            <ul
              className={
                isDropdownOpen
                  ? styles.navbar__items__listWrapper__active
                  : styles.navbar__items__listWrapper
              }
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

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

export default HeaderNavbar;
