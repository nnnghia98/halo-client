import React from "react";
import Image from "next/image";

import { getSetting } from "utils/common";

import facebook from "assets/svg/facebook.svg";
import instagram from "assets/svg/instagram.svg";
import youtube from "assets/svg/youtube.svg";
import tiktok from "assets/svg/tiktok.svg";

import styles from "./Footer.module.scss";
import getConfig from "next/config";
import get from "lodash/get";
import { DEFAULT_ROUTES } from "utils/constants";
import Link from "next/link";

const Footer = () => {
  const config = getConfig();
  const routes = get(config, "publicRuntimeConfig.routes", DEFAULT_ROUTES);
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__site}>
          <span className={styles.footer__quote}>Delighting your home</span>
          <ul>
            {routes.map((route) => (
              <li key={route.title}>
                <Link href={`/${route.slug ?? ""}`}>{route.title}</Link>
              </li>
            ))}
          </ul>
          <p>
            <span className={styles.footer__brandName}>HALO lighting</span>{" "}
            <span>
              là đội ngũ thiết kế và sản xuất đèn trang trí nội thất, mang đến
              các giá trị tinh thần và vẻ đẹp nghệ thuật cho không gian.
            </span>
          </p>
        </div>
        <div className={styles.footer__info}>
          <div className={styles.footer__flexWrapper}>
            <span className={styles.footer__info__brandName}>
              HALO lighting
              <div className={styles.footer__info__socialMedia}>
                <div className={styles.footer__info__socialMedia__item}>
                  <Image
                    src={facebook}
                    alt="facebookIcon"
                    width="25px"
                    height="25px"
                  />
                </div>
                <div className={styles.footer__info__socialMedia__item}>
                  <Image
                    src={tiktok}
                    alt="tiktokIcon"
                    width="25px"
                    height="25px"
                  />
                </div>
                <div className={styles.footer__info__socialMedia__item}>
                  <Image
                    src={youtube}
                    alt="youtubeIcon"
                    width="25px"
                    height="25px"
                  />
                </div>
                <div className={styles.footer__info__socialMedia__item}>
                  <Image
                    src={instagram}
                    alt="instagramIcon"
                    width="25px"
                    height="25px"
                  />
                </div>
              </div>
            </span>
          </div>
          <p>
            <span className={styles.footer__info__company}>
              {getSetting("show_room_sg")}
            </span>
            <br />
            {getSetting("phone_number_sg")} <br />
            {getSetting("show_room_sg_address")} <br />
            <br />
            <span className={styles.footer__info__company}>
              {getSetting("show_room_hn")}
            </span>
            <br />
            {getSetting("phone_number_hn")} <br />
            {getSetting("show_room_hn_address")}
          </p>
          <ul>
            <li>Đăng ký bản tin mới</li>
            <li>Thông tin liên hệ</li>
            <li>Profile công ty</li>
          </ul>
        </div>
        <div className={styles.footer__copyright}>
          Copyright © 2018 Halolighting Design. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
