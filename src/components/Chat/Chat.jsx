import React, { useState, useCallback } from "react";
import MessageList from "./MessageList";
import UserList from "./UserList";
import MessageInput from "./MessageInput";
import styles from "./Chat.module.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const users = [
    { id: "1", username: "Buyer", role: "buyer" },
    { id: "2", username: "Seller", role: "seller" },
  ];
  const [currentUser, setCurrentUser] = useState(users[0]);

  const handleSendMessage = useCallback(
    (text) => {
      const newMessage = {
        id: Date.now().toString(),
        text,
        avatar:
          currentUser.role === "buyer"
            ? "https://i.pravatar.cc/100"
            : "https://i.pravatar.cc/101",
        username: currentUser.username,
        userId: currentUser.id,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    },
    [currentUser]
  );

  const handleDeleteLastMessage = useCallback(() => {
    setMessages((prevMessages) => prevMessages.slice(0, -1));
  }, []);

  const switchUser = useCallback(() => {
    setCurrentUser((prevUser) => (prevUser.id === "1" ? users[1] : users[0]));
  }, []);

  return (
    <div className={styles.chatContainer}>
      <UserList
        users={users}
        currentUser={currentUser}
        onSwitchUser={switchUser}
      />
      <div className={styles.chatMain}>
        <MessageList messages={messages} currentUserId={currentUser.id} />
        <MessageInput
          onSendMessage={handleSendMessage}
          onDeleteLastMessage={handleDeleteLastMessage}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
}

export default Chat;
