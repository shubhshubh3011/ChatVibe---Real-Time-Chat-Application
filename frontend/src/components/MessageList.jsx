export default function MessageList({ messages, userName, formatTime }) {
    return (
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-slate-900/50 to-slate-900/20 backdrop-blur-sm">
            {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-gray-400 text-sm font-light">No messages yet</p>
                        <p className="text-gray-500 text-xs mt-2">Start a conversation!</p>
                    </div>
                </div>
            ) : (
                messages.map((m, index) => {
                    const mine = m.sender === userName;
                    return (
                        <div
                            key={m.id}
                            className={`flex ${mine ? 'justify-end' : 'justify-start'} animate-message-pop`}
                            style={{
                                animationDelay: `${index * 0.05}s`,
                            }}>
                            <div className="flex flex-col max-w-xs gap-1">
                                {/* Sender name */}
                                <div
                                    className={`text-xs font-semibold px-4 ${
                                        mine
                                            ? 'text-purple-300 text-right'
                                            : 'text-blue-300 text-left'
                                    }`}>
                                    {m.sender}
                                </div>

                                {/* Message bubble */}
                                <div
                                    className={`px-5 py-3 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${
                                        mine
                                            ? 'bg-gradient-to-br from-purple-600/80 to-pink-600/80 border-purple-400/30 rounded-br-none text-white shadow-lg shadow-purple-500/20'
                                            : 'bg-gradient-to-br from-blue-600/60 to-cyan-600/60 border-blue-400/30 rounded-bl-none text-gray-100 shadow-lg shadow-blue-500/20'
                                    }`}>
                                    <div className="break-words whitespace-pre-wrap text-sm leading-relaxed font-medium">
                                        {m.text}
                                    </div>
                                </div>

                                {/* Timestamp */}
                                <div
                                    className={`text-xs text-gray-400 font-light ${
                                        mine ? 'text-right pr-1' : 'text-left pl-1'
                                    }`}>
                                    {formatTime(m.ts)}
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}
