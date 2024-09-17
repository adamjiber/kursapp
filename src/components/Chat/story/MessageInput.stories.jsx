import React from "react";
import MessageInput from "../MessageInput";

export default {
  title: "Chat/MessageInput",
  component: MessageInput,
};

const buyerUser = { id: "1", username: "Buyer", role: "buyer" };
const sellerUser = { id: "2", username: "Seller", role: "seller" };

export const BuyerInput = () => (
  <MessageInput
    onSendMessage={(message) => console.log("Sending message:", message)}
    onDeleteLastMessage={() => console.log("Deleting last message")}
    currentUser={buyerUser}
  />
);

export const SellerInput = () => (
  <MessageInput
    onSendMessage={(message) => console.log("Sending message:", message)}
    onDeleteLastMessage={() => console.log("Deleting last message")}
    currentUser={sellerUser}
  />
);
