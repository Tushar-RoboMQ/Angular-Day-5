let dbConfig = require("./mysqlConfig");

let getUsers = (criteria, callback) => {
    dbConfig.getDB().query(`select * from people where 1`, criteria, callback);
}
let createUser = () => {}
let deleteUser = () => {}
let updateUser = () => {}
let getUserDetail = () => {}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    getUserDetail: getUserDetail
}