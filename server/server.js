import Express from "express";
import Http from "http";
import { Server } from "socket.io";

const express = Express();
const http = Http.Server(express);
const server = new Server(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});
const port = 3000;

let position = {
  x: 100,
  y: 100,
};

server.on("connection", (socket) => {
  socket.emit("position", position);

  socket.on("move", (data) => {
    switch (data) {
      case "left":
        position.x -= 5;
        server.emit("position", position);
        break;
      case "right":
        position.x += 5;
        server.emit("position", position);
        break;
      case "up":
        position.y -= 5;
        server.emit("position", position);
        break;
      case "down":
        position.y += 5;
        server.emit("position", position);
        break;
    }
  });
});

http.listen(port, () => {
  console.log("Listening at 3000...");
});
