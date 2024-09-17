import React from "react";
import styles from "./Chat.module.css";

function UserList({ users, currentUser, onSwitchUser }) {
  return (
    <div className={styles.userList}>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className={`${styles.userItem} ${user.id === currentUser.id ? styles.activeUser : ""}`}
          >
            {user.username} ({user.role})
          </li>
        ))}
      </ul>
      <button onClick={onSwitchUser} className={styles.switchUserButton}>
        Switch to {currentUser.id === "1" ? "Seller" : "Buyer"}
      </button>
    </div>
  );
}

export default UserList;
