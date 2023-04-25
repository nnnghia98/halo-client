import React from "react";

import styles from "./Collaborators.module.scss";

const Collaborators = () => (
  <div className={styles.collaborators}>
    <div className={styles.collaborators__container}>
      <h3>ĐƠN VỊ HỢP TÁC</h3>
      <div className={styles.collaborators__list}>
        <div className={styles.collaborators__itemWrap}></div>
        <div className={styles.collaborators__itemWrap}></div>
        <div className={styles.collaborators__itemWrap}></div>
        <div className={styles.collaborators__itemWrap}></div>
        <div className={styles.collaborators__itemWrap}></div>
        <div className={styles.collaborators__itemWrap}></div>
      </div>
    </div>
  </div>
);

export default Collaborators;
