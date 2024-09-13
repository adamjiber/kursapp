import React from "react";
import CartContainer from "./CartContainer";

export default {
  title: "Productcart/CartContainer",
  component: CartContainer,
};

// Story för produktkorg med dummydata
export const WithItems = () => <CartContainer />;

// Story för en tom produktkorg
export const Empty = () => <CartContainer cartItems={[]} />;
