export default function NamePopup({ inputName, setInputName, handleNameSubmit }) {
    return (
        <div className="name-overlay">
            <form className="name-card" onSubmit={handleNameSubmit}>
                <div className="welcome-mark"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg></div>
                <h1>Welcome to ChatVibe</h1>
                <p>A simple space for real-time conversations. Choose a name to join the room.</p>
                <label htmlFor="display-name">Your display name</label>
                <input id="display-name" autoFocus autoComplete="name" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="e.g. Alex Morgan" />
                <button type="submit" className="join-button">Enter the conversation</button>
                <div className="privacy-note"><span>●</span> No account needed · Your name stays temporary</div>
            </form>
        </div>
    );
}
