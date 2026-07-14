export default function NamePopup({ inputName, setInputName, handleNameSubmit }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Main card */}
            <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl max-w-md p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2 animate-fade-in">
                            ChatVibe
                        </h1>
                        <p className="text-sm text-gray-300 font-light">Step into the conversation</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleNameSubmit} className="space-y-4">
                        <div className="relative group">
                            <input
                                autoFocus
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                placeholder="What's your vibe name?"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                            Join the Vibe
                        </button>
                    </form>

                    {/* Footer text */}
                    <p className="text-xs text-gray-400 text-center mt-6 font-light">
                        Real-time chat • No login needed • Pure vibes
                    </p>
                </div>
            </div>
        </div>
    );
}
