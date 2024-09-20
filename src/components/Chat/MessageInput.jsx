import React, { useState } from "react";
import styles from "./Chat.module.css";

function MessageInput({ onSendMessage, onDeleteLastMessage, currentUser }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className={styles.messageInput}>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Type a message as ${currentUser.username}...`}
          className={styles.inputField}
        />
        <button type="submit" className={styles[`${currentUser.role}Button`]}>
          Send
        </button>
      </form>
      <button onClick={onDeleteLastMessage} className={styles.deleteButton}>
        Delete Last
      </button>
    </div>
  );
}

export default MessageInput;
