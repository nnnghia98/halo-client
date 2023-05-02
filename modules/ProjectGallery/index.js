import React from "react";
import Image from "next/image";
import Link from "next/link";

import project1 from "assets/img/project1.jpg";

import styles from "./ProjectGallery.module.scss";

const ProjectGallery = () => (
  <div className={styles.productGallery}>
    <div className={styles.productGallery__list}>
      <Link href="/bo-suu-tap/detail">
        <div className={styles.productGallery__itemWrap}>
          <Image src={project1} alt="project-1" priority />
          <div className={styles.productGallery__itemName}>
            <div>PRIVATE RESIDENCE</div>
            <div>The Signature Midtown, Phú Mỹ Hưng</div>
          </div>
        </div>
      </Link>
      <Link href="/bo-suu-tap/detail">
        <div className={styles.productGallery__itemWrap}>
          <Image src={project1} alt="project-1" priority />
          <div className={styles.productGallery__itemName}>
            <div>PRIVATE RESIDENCE</div>
            <div>The Signature Midtown, Phú Mỹ Hưng</div>
          </div>
        </div>
      </Link>
      <Link href="/bo-suu-tap/detail">
        <div className={styles.productGallery__itemWrap}>
          <Image src={project1} alt="project-1" priority />
          <div className={styles.productGallery__itemName}>
            <div>PRIVATE RESIDENCE</div>
            <div>The Signature Midtown, Phú Mỹ Hưng</div>
          </div>
        </div>
      </Link>
      <Link href="/bo-suu-tap/detail">
        <div className={styles.productGallery__itemWrap}>
          <Image src={project1} alt="project-1" priority />
          <div className={styles.productGallery__itemName}>
            <div>PRIVATE RESIDENCE</div>
            <div>The Signature Midtown, Phú Mỹ Hưng</div>
          </div>
        </div>
      </Link>
      <Link href="/bo-suu-tap/detail">
        <div className={styles.productGallery__itemWrap}>
          <Image src={project1} alt="project-1" priority />
          <div className={styles.productGallery__itemName}>
            <div>PRIVATE RESIDENCE</div>
            <div>The Signature Midtown, Phú Mỹ Hưng</div>
          </div>
        </div>
      </Link>
      <Link href="/bo-suu-tap/detail">
        <div className={styles.productGallery__itemWrap}>
          <Image src={project1} alt="project-1" priority />
          <div className={styles.productGallery__itemName}>
            <div>PRIVATE RESIDENCE</div>
            <div>The Signature Midtown, Phú Mỹ Hưng</div>
          </div>
        </div>
      </Link>
      <Link href="/bo-suu-tap/detail">
        <div className={styles.productGallery__itemWrap}>
          <Image src={project1} alt="project-1" priority />
          <div className={styles.productGallery__itemName}>
            <div>PRIVATE RESIDENCE</div>
            <div>The Signature Midtown, Phú Mỹ Hưng</div>
          </div>
        </div>
      </Link>
      <Link href="/bo-suu-tap/detail">
        <div className={styles.productGallery__itemWrap}>
          <Image src={project1} alt="project-1" priority />
          <div className={styles.productGallery__itemName}>
            <div>PRIVATE RESIDENCE</div>
            <div>The Signature Midtown, Phú Mỹ Hưng</div>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default ProjectGallery;
