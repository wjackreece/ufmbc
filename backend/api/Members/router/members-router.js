const express = require("express");
const server = express();
const {
  login,
  getMembers,
  getMemberByEmail,
  getMemberByMemberId,
  addMember,
  updateMemberByMemberId,
  updateMemberByEmail,
  deactivateMember,
  verifyMember,
  verifyAdmin,
} = require("../middleware/members-middleware");

server.post("/", verifyMember, login, (req, res, next) => {});
server.get("/", verifyMember, getMembers, (req, res, next) => {});
server.get("/", verifyMember, getMemberByEmail, (req, res, next) => {});
server.get("/", verifyMember, getMemberByMemberId, (req, res, next) => {});
server.post("/", verifyAdmin, addMember, (req, res, next) => {});
server.put("/", verifyAdmin, updateMemberByMemberId, (req, res, next) => {});
server.put("/", verifyAdmin, updateMemberByEmail, (req, res, next) => {});
server.post("/", verifyMember, deactivateMember, (req, res, next) => {});

module.exports = server;
