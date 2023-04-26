import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import publicRequest from "utils/requests";

import HalolightingLogo from "../HalolightingLogo";
import hamburgerIcon from "assets/svg/hamburgerIcon.svg";

import styles from "./HeaderNavbar.module.scss";

const HeaderNavbar = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link href="/about-us">VỀ CHÚNG TÔI</Link>
      </li>
      <li>
        <Link href="/projects">CÁC DỰ ÁN</Link>
      </li>
      <li>
        <Link href="/collections">BỘ SƯU TẬP</Link>
      </li>
      <li>
        <Link href="/san-pham">SẢN PHẨM</Link>
      </li>
      <li>
        <Link href="/contact">LIÊN HỆ</Link>
      </li>
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
