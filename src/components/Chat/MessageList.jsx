import React from "react";
import styles from "./Chat.module.css";

function MessageList({ messages, userId }) {
  return (
    <ul className={styles.messageList}>
      {messages.map((message) => (
        <li
          key={message.id}
          className={
            message.userId === userId ? styles.ownMessage : styles.otherMessage
          }
        >
          <img
            src={message.avatar}
            alt={message.username}
            className={styles.avatar}
          />
          <div>
            <strong>{message.username}</strong>
            <p>{message.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MessageList;
