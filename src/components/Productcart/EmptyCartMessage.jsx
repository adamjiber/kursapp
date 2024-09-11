import React from "react";
import styles from "./Cart.module.css";

const EmptyCartMessage = () => {
  return (
    <div className={styles.emptyCartMessage}>
      <p>Din produktkorg är tom. Lägg till produkter för att komma igång!</p>
    </div>
  );
};

export default EmptyCartMessage;
