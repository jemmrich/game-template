import React from "react";
import styles from "./index.module.css";

const PlayerInventory = () => {
  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.inventory}>
        <div className={styles.inventorySlot}></div>
        <div className={styles.inventorySlot}></div>
        <div className={styles.inventorySlot}></div>
        <div className={styles.inventorySlot}></div>
        <div className={styles.inventorySlot}></div>
      </div>
    </div>
  );
};

export default PlayerInventory;
