import { useEffect, useRef } from 'react';

export default function MessageList({ messages, userName, formatTime }) {
    const bottomRef = useRef(null);
    useEffect(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

    return (
        <div className="messages" aria-live="polite">
            {messages.length === 0 ? (
                <div className="empty-state"><div><div className="empty-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg></div><h3>Your conversation starts here</h3><p>Say hello and make someone’s day.</p></div></div>
            ) : (
                <><div className="date-divider"><span>Today</span></div>{messages.map((message) => {
                    const mine = message.sender === userName;
                    return <div key={message.id} className={`message-row ${mine ? 'mine' : ''}`}>
                        <div className="message-stack"><div className="sender">{mine ? 'You' : message.sender}</div><div className="bubble">{message.text}</div><div className="message-time">{formatTime(message.ts)}{mine ? ' · Delivered' : ''}</div></div>
                    </div>;
                })}</>
            )}
            <div ref={bottomRef} />
        </div>
    );
}
