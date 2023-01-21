import app from "./app";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { PORT } from "./config";

import { connectDB } from "./db"
connectDB()

import sockets from "./sockets";

const server = http.createServer(app)
const httpServer = server.listen(puerto)

const io = new WebSocketServer(httpServer)
sockets(io)

console.log(`Server listening on port ${PORT}`);