const login = (req, res, next) => {};
const verifyMember = (req, res, next) => {};
const verifyAdmin = (req, res, next) => {};
const getMembers = (req, res, next) => {};
const getMemberByEmail = (req, res, next) => {};
const getMemberByMemberId = (req, res, next) => {};
const addMember = (req, res, next) => {};
const updateMemberByMemberId = (req, res, next) => {};
const updateMemberByEmail = (req, res, next) => {};
const deactivateMember = (req, res, next) => {};

module.exports = {
  login,
  verifyMember,
  verifyAdmin,
  getMembers,
  getMemberByEmail,
  getMemberByMemberId,
  addMember,
  updateMemberByMemberId,
  updateMemberByEmail,
  deactivateMember,
};
