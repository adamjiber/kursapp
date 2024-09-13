import React from "react";
import styles from "./Cart.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.cartItemImage} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.price} SEK</p>
        <p>Antal: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
