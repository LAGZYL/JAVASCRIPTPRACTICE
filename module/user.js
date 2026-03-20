const users = [];
function addUser(name){
  users.push(name);
}
function getUsers(){
 return users;
}

module.exports = {addUser,getUsers}