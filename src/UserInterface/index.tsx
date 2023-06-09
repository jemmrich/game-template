import React from 'react';
import PlayerInventory from './Components/InventoryBar';
import styles from './index.module.css';

const UserInterface = () => {
  return (
    <div className={styles.uiHud}>
      User Interface Example
      <PlayerInventory />
    </div>
  )
};

export default UserInterface;
