import { joinRoom, broadcastToOthers } from '../utils/roomManager.js';

export function setupUserEvents(socket, io) {
    socket.on('joinRoom', async (userName) => {
        joinRoom(socket, userName);
        // broadcast to others that someone joined
        broadcastToOthers(socket, 'roomNotice', userName);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
}
