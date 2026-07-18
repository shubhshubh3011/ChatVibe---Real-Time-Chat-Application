import { useState } from 'react';
import { useSocket } from './hooks/useSocket';
import NamePopup from './components/NamePopup';
import ChatWindow from './components/ChatWindow';

export default function App() {
    const { socket, messages, setMessages, userName, setUserName } = useSocket();
    const [showNamePopup, setShowNamePopup] = useState(true);
    const [inputName, setInputName] = useState('');
    const [text, setText] = useState('');

    function formatTime(ts) {
        return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit' }).format(new Date(ts));
    }

    function handleNameSubmit(e) {
        e.preventDefault();
        const trimmed = inputName.trim();
        if (!trimmed || !socket.current) return;
        socket.current.emit('joinRoom', trimmed);
        setUserName(trimmed);
        setShowNamePopup(false);
    }

    function sendMessage() {
        const content = text.trim();
        if (!content || !socket.current) return;
        const msg = { id: Date.now(), sender: userName, text: content, ts: Date.now() };
        setMessages((current) => [...current, msg]);
        socket.current.emit('chatMessage', msg);
        setText('');
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <main className="app-shell">
            {showNamePopup && (
                <NamePopup inputName={inputName} setInputName={setInputName} handleNameSubmit={handleNameSubmit} />
            )}
            {!showNamePopup && (
                <ChatWindow messages={messages} userName={userName} text={text} setText={setText}
                    handleKeyDown={handleKeyDown} sendMessage={sendMessage} formatTime={formatTime} />
            )}
        </main>
    );
}
