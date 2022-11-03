const connection = require("../db-config");

const findAllUsers = async () => {
  return connection.promise().query("SELECT * FROM user");
};

const findOneUser = async (userId) =>
  connection.promise().query("SELECT * FROM user WHERE id=?", [userId]);

const findUserByEmail = (mail) =>
  connection.promise().query("SELECT * FROM user WHERE mail = ? ", [mail]);

const insertUser = async (mail, password) =>
  connection
    .promise()
    .query("INSERT INTO user (mail, password) VALUES (?,?)", [mail, password]);

const modifyOneUser = async (id, newAttributes) => {
  return connection
    .promise()
    .query("UPDATE user SET ? WHERE id = ?", [newAttributes, id]);
};

const deleteUser = async (id) => {
  return connection.promise().query("DELETE FROM user WHERE id = ?", [id]);
};

module.exports = {
  findAllUsers,
  insertUser,
  findUserByEmail,
  findOneUser,
  modifyOneUser,
  deleteUser,
};
