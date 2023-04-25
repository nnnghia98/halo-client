import React, { useState } from "react";
import Link from "next/link";

import publicRequest from "utils/requests";

import HalolightingLogo from "../HalolightingLogo";
import hamburgerIcon from "../../assets/svg/hamburgerIcon.svg";

import styles from "./HeaderNavbar.module.scss";

const HeaderNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fetchData = () => {
    publicRequest
      .get("/page/main-page")
      .then((result) => console.log(result))
      .catch((e) => console.log(e));

    // console.log(publicRequest.get("/page/main-page"));
  };

  const menuItems = (
    <>
      <li>
        {fetchData()}
        <Link href="/about-us">VỀ CHÚNG TÔI</Link>
      </li>
      <li>
        <Link href="/projects">CÁC DỰ ÁN</Link>
      </li>
      <li>
        <Link href="/collections">BỘ SƯU TẬP</Link>
      </li>
      <li>
        <Link href="/products">SẢN PHẨM</Link>
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
            <img
              className={styles.navbar__hamburger}
              src={hamburgerIcon}
              alt="hamburgerIcon"
              width={25}
              onClick={triggerDropdown}
            />
            <ul
              className={`${styles.navbar__items__listWrapper}${
                isDropdownOpen ? "__active" : ""
              }`}
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
