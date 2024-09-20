import React from "react";
import UserList from "../UserList";

export default {
  title: "Chat/UserList",
  component: UserList,
};

const users = [
  { id: "1", username: "Buyer", role: "buyer" },
  { id: "2", username: "Seller", role: "seller" },
];

export const Default = () => (
  <UserList
    users={users}
    currentUser={users[0]}
    onSwitchUser={() => console.log("Switching user")}
  />
);

export const SellerActive = () => (
  <UserList
    users={users}
    currentUser={users[1]}
    onSwitchUser={() => console.log("Switching user")}
  />
);
