import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCartMessage from "./EmptyCartMessage";
import styles from "./Cart.module.css";
import dummyCartItems from "./data/CartItems";

const CartContainer = () => {
  const [cartItems, setCartItems] = useState(dummyCartItems);

  return (
    <div className={styles.cartContainer}>
      <h2>Din produktkorg</h2>
      {cartItems.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <CartSummary items={cartItems} />
        </>
      )}
    </div>
  );
};

export default CartContainer;
