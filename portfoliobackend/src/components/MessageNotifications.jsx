import React from 'react';
import './MessageNotifications.css';

const MessageNotifications = ({ unreadCount = 4 }) => {
  return (
    <button className="message-btn">

      <div className="message-text-group">
        <span className="msg-title">Messages</span>
        <span className="msg-subtitle">{unreadCount} unread messages</span>
      </div>

 
      <img src="../assets/nav_messages_icon.svg" alt="messages icon" />
    </button>
  );
};

export default MessageNotifications;