const http = require("http");
const path = require("path");
const express = require("express");
require("dotenv").config();
const socketIO = require("socket.io");
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "/../public");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
    console.log("A new user just connected!");
});

app.use(express.static(publicPath));

server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
