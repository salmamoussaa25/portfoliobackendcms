import React, { useState, useEffect } from 'react';
import { supabase } from '../SupabaseClient'; 
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import ProfileButton from '../components/ProfileButton';
import MessageNotifications from '../components/MessageNotifications';
import './MessageInbox.css';

const MessageInbox = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
     
      setMessages(data.map(m => ({ ...m, expanded: false })));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

 
  const markAsRead = async (id) => {
    const { error } = await supabase
      .from('contact_messages')
      .update({ is_read: true })
      .eq('id', id);

    if (error) {
      alert("Error updating message status");
    } else {
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, is_read: true } : msg
      ));
    }
  };


  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id);

    if (error) {
      alert("Error deleting message");
    } else {
      setMessages(messages.filter(msg => msg.id !== id));
    }
  };

  const toggleRow = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, expanded: !msg.expanded } : msg
    ));
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <header className="page-header">
           <div className="header-left">
             <h1 className="page-title">Message Inbox</h1>
           </div>
           <div className="header-center">
             <SearchBar />
           </div>
           <div className="header-right">
             <MessageNotifications />
             <ProfileButton />
           </div>
        </header>

        <div className="toolbar-section">
          <div className="action-buttons-group">
            <button className="btn-action" onClick={fetchMessages}>
              Refresh Data
            </button>
          </div>
          <div className="lang-toggle-pill">
            <span className="lang-opt active">EN</span>
            <span className="lang-opt">AR</span>
          </div>
        </div>

        <div className="inbox-card">
          <div className="inbox-filters">
            <div className="filter-search">
              <input type="text" placeholder="Search by name, email, subject..." />
            </div>
          </div>

          <div className="message-table">
            <div className="message-header-row">
              <div className="col-sender">Sender Name</div>
              <div className="col-email">Email</div>
              <div className="col-subject">Subject</div>
              <div className="col-date">Date Received</div>
              <div className="col-status">Status</div>
            </div>

            <div className="message-rows">
              {loading ? (
                <div className="loading-state">Loading messages...</div>
              ) : messages.length === 0 ? (
                <div className="empty-state">No messages found.</div>
              ) : (
                messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`message-row ${msg.expanded ? 'expanded' : ''} ${!msg.is_read ? 'unread-row' : ''}`}
                  >
                    <div className="row-main-content" onClick={() => toggleRow(msg.id)}>
                      <div className="col-sender font-bold">{msg.sender_name}</div>
                      <div className="col-email">{msg.sender_email}</div>
                      <div className="col-subject font-medium">{msg.subject}</div>
                      <div className="col-date">
                        {new Date(msg.submitted_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                      </div>
                      <div className="col-status">
                        <span className={`status-badge ${msg.is_read ? 'read' : 'new'}`}>
                          {msg.is_read ? 'Read' : 'New'}
                        </span>
                      </div>
                    </div>

                    {msg.expanded && (
                      <div className="row-details-section">
                        <div className="message-body">
                          <strong>Message:</strong>
                          <p>{msg.message}</p>
                        </div>
                        <div className="row-actions">
                          {!msg.is_read && (
                            <button className="action-pill" onClick={(e) => { e.stopPropagation(); markAsRead(msg.id); }}>
                              Mark as Read
                            </button>
                          )}
                          <button className="action-pill delete" onClick={(e) => { e.stopPropagation(); deleteMessage(msg.id); }}>
                            Delete Permanent
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MessageInbox;