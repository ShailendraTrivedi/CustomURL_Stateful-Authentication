const sessionIdUserMap = new Map();
const setUser = (uid, user) => {
  return sessionIdUserMap.set(uid, user);
};

const getUser = (uid) => {
  return sessionIdUserMap.get(uid);
};
 
module.exports = {
  setUser,
  getUser,
}; 
