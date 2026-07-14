import { createServer } from 'node:http';
import express from 'express';
import { Server } from 'socket.io';
import { setupUserEvents } from './events/userEvents.js';
import { setupChatEvents } from './events/chatEvents.js';

const app = express();

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    // Setup all event handlers
    setupUserEvents(socket, io);
    setupChatEvents(socket, io);
});

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

server.listen(4600, () => {
    console.log('server running at http://localhost:4600');
});
