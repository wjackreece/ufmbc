const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

// Church Router
const ChurchRouter = require("./Members/router/members-router");
server.use("/api/v3/members/", ChurchRouter);

server.use("*", (req, res) => {
  res.status(500).json({
    message: "Unity Faith Missionay Baptist Church Server",
  });
});

server.use((err, req, res) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
