import { useState } from 'react';
import { useSocket } from './hooks/useSocket';
import NamePopup from './components/NamePopup';
import ChatWindow from './components/ChatWindow';

export default function App() {
    const { socket, messages, setMessages, userName, setUserName } = useSocket();
    const [showNamePopup, setShowNamePopup] = useState(true);
    const [inputName, setInputName] = useState('');
    const [text, setText] = useState('');

    // FORMAT TIMESTAMP TO HH:MM FOR MESSAGES
    function formatTime(ts) {
        const d = new Date(ts);
        const hh = String(d.getHours()).padStart(2, '0');
        const mm = String(d.getMinutes()).padStart(2, '0');
        return `${hh}:${mm}`;
    }

    // SUBMIT NAME TO GET STARTED
    function handleNameSubmit(e) {
        e.preventDefault();
        const trimmed = inputName.trim();
        if (!trimmed) return;

        // join room
        socket.current.emit('joinRoom', trimmed);

        setUserName(trimmed);
        setShowNamePopup(false);
    }

    // SEND MESSAGE FUNCTION
    function sendMessage() {
        const t = text.trim();
        if (!t) return;

        // USER MESSAGE
        const msg = {
            id: Date.now(),
            sender: userName,
            text: t,
            ts: Date.now(),
        };
        setMessages((m) => [...m, msg]);

        // emit
        socket.current.emit('chatMessage', msg);

        setText('');
    }

    // HANDLE ENTER KEY TO SEND MESSAGE
    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className="min-h-screen w-screen flex items-center justify-center p-4 font-inter bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* NAME POPUP */}
            {showNamePopup && (
                <NamePopup
                    inputName={inputName}
                    setInputName={setInputName}
                    handleNameSubmit={handleNameSubmit}
                />
            )}

            {/* CHAT WINDOW */}
            {!showNamePopup && (
                <ChatWindow
                    messages={messages}
                    userName={userName}
                    text={text}
                    setText={setText}
                    handleKeyDown={handleKeyDown}
                    sendMessage={sendMessage}
                    formatTime={formatTime}
                />
            )}
        </div>
    );
}
