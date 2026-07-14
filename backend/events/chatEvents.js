import { broadcastToOthers } from '../utils/roomManager.js';

export function setupChatEvents(socket, io) {
    socket.on('chatMessage', (msg) => {
        console.log('Message received:', msg);
        // broadcast to others in the room
        broadcastToOthers(socket, 'chatMessage', msg);
    });
}
