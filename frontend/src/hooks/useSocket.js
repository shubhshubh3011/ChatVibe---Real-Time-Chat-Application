import { useEffect, useRef, useState } from 'react';
import { connectWS } from '../services/ws';

export function useSocket() {
    const socket = useRef(null);
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        socket.current = connectWS();

        socket.current.on('connect', () => {
            socket.current.on('roomNotice', (userName) => {
                console.log(`${userName} joined to group!`);
            });

            socket.current.on('chatMessage', (msg) => {
                console.log('msg', msg);
                setMessages((prev) => [...prev, msg]);
            });
        });

        return () => {
            socket.current.off('roomNotice');
            socket.current.off('chatMessage');
        };
    }, []);

    return { socket, messages, setMessages, userName, setUserName };
}
