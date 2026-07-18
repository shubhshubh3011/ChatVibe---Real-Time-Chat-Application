import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Icon = ({ children, size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

export default function ChatWindow(props) {
    const { messages, userName } = props;
    const initial = userName.charAt(0).toUpperCase();
    const lastMessage = messages.at(-1)?.text || 'Start a new conversation';

    return (
        <section className="chat-app" aria-label="ChatVibe messenger">
            <aside className="sidebar">
                <div className="sidebar-top">
                    <div className="brand">
                        <span className="brand-mark"><Icon size={19}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></Icon></span>
                        ChatVibe
                    </div>
                    <button className="icon-button" aria-label="New message"><Icon><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/></Icon></button>
                </div>

                <label className="search-box">
                    <Icon size={16}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></Icon>
                    <input placeholder="Search conversations" aria-label="Search conversations" />
                </label>

                <p className="sidebar-label">Messages</p>
                <button className="conversation">
                    <span className="avatar orange">CV<span className="online-dot" /></span>
                    <span className="conversation-copy">
                        <span className="conversation-row"><span className="conversation-name">General chat</span><span className="conversation-time">Now</span></span>
                        <span className="conversation-preview">{lastMessage}</span>
                    </span>
                </button>

                <div className="sidebar-profile">
                    <span className="avatar">{initial}</span>
                    <div className="profile-copy"><div className="profile-name">{userName}</div><div className="profile-status">Online</div></div>
                    <button className="icon-button" aria-label="Settings"><Icon size={17}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1v.1h-4v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4h-.1v-4H3A1.7 1.7 0 0 0 4.6 8.5a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1v-.1h4V3A1.7 1.7 0 0 0 15.5 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.14.38.35.72.6 1 .28.27.64.4 1 .4h.1v4H21a1.7 1.7 0 0 0-1.6.6z"/></Icon></button>
                </div>
            </aside>

            <div className="chat-panel">
                <header className="chat-header">
                    <div className="chat-person">
                        <span className="avatar orange">CV<span className="online-dot" /></span>
                        <div><h2 className="chat-title">General chat</h2><p className="active-text">Active now</p></div>
                    </div>
                    <div className="header-actions">
                        <button className="icon-button" aria-label="Search messages"><Icon><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></Icon></button>
                        <button className="icon-button" aria-label="Conversation info"><Icon><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></Icon></button>
                    </div>
                </header>
                <MessageList messages={messages} userName={userName} formatTime={props.formatTime} />
                <MessageInput text={props.text} setText={props.setText} handleKeyDown={props.handleKeyDown} sendMessage={props.sendMessage} />
            </div>
        </section>
    );
}
