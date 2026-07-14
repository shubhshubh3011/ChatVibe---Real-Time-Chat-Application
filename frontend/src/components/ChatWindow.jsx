import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function ChatWindow({
    messages,
    userName,
    text,
    setText,
    handleKeyDown,
    sendMessage,
    formatTime,
}) {
    return (
        <div className="w-full max-w-3xl h-[90vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/10">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600/40 to-blue-600/40 backdrop-blur-xl border-b border-white/10 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur opacity-75 animate-pulse"></div>
                            <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                {userName.charAt(0).toUpperCase()}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-lg">ChatVibe</h2>
                            <p className="text-purple-300 text-xs font-light">Real-time conversations</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-300 text-sm font-light">Chatting as</p>
                        <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold capitalize">
                            {userName}
                        </p>
                    </div>
                </div>
            </div>

            {/* Messages Container */}
            <MessageList messages={messages} userName={userName} formatTime={formatTime} />

            {/* Input Container */}
            <MessageInput
                text={text}
                setText={setText}
                handleKeyDown={handleKeyDown}
                sendMessage={sendMessage}
            />
        </div>
    );
}
