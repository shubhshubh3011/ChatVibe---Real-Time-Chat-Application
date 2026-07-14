export default function MessageInput({ text, setText, handleKeyDown, sendMessage }) {
    return (
        <div className="bg-gradient-to-t from-slate-900 to-slate-900/60 backdrop-blur-xl border-t border-white/10 px-6 py-5">
            <div className="flex gap-3 items-end">
                {/* Textarea */}
                <div className="flex-1 relative group">
                    <textarea
                        rows={1}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="w-full resize-none px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 font-medium text-sm"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Send Button */}
                <button
                    onClick={sendMessage}
                    className="relative group px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                    <span>Send</span>
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-light">Press Enter to send • Shift+Enter for new line</p>
        </div>
    );
}
