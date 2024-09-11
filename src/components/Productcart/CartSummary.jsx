import React from "react";
import styles from "./Cart.module.css";

const CartSummary = ({ items }) => {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartSummary}>
      <p>Totalt antal produkter: {totalQuantity}</p>
      <p>Totalpris: {totalPrice} SEK</p>
    </div>
  );
};

export default CartSummary;
