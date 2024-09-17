import React from "react";
import MessageList from "../MessageList";

export default {
  title: "Chat/MessageList",
  component: MessageList,
};

const sampleMessages = [
  {
    id: "1",
    text: "Hello",
    username: "User1",
    avatar: "https://i.pravatar.cc/100",
    userId: "1",
  },
  {
    id: "2",
    text: "Hi there!",
    username: "User2",
    avatar: "https://i.pravatar.cc/101",
    userId: "2",
  },
];

export const Default = () => (
  <MessageList messages={sampleMessages} userId="1" />
);
