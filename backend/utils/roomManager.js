// Room management utility
export const ROOM = 'group';

export function joinRoom(socket, userName) {
    console.log(`${userName} is joining the group.`);
    socket.join(ROOM);
}

export function leaveRoom(socket, userName) {
    console.log(`${userName} left the group.`);
    socket.leave(ROOM);
}

export function broadcastToRoom(io, event, data) {
    io.to(ROOM).emit(event, data);
}

export function broadcastToOthers(socket, event, data) {
    socket.to(ROOM).emit(event, data);
}
