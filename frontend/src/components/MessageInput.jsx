export default function MessageInput({ text, setText, handleKeyDown, sendMessage }) {
    return (
        <div className="composer-wrap">
            <div className="composer">
                <textarea rows="1" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} placeholder="Write a message…" aria-label="Message" />
                <button className="send-button" onClick={sendMessage} disabled={!text.trim()} aria-label="Send message">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
            </div>
            <p className="composer-hint">Press Enter to send · Shift + Enter for a new line</p>
        </div>
    );
}
