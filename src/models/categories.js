const connection = require("../db-config");

const findAllCategories = async () => {
  return connection.promise().query("SELECT * FROM category");
};

const findOneCategorie = async (categoryId) => {
  return connection
    .promise()
    .query("SELECT * FROM category WHERE id=?", [categoryId]);
};

const insertCategorie = async (name) => {
  return connection
    .promise()
    .query("INSERT INTO category (name) VALUES (?)", [name]);
};

const modifyOneCategories = async (id, newAttributes) => {
  return connection
    .promise()
    .query("UPDATE category SET ? WHERE id = ?", [newAttributes, id]);
};

const deleteCategories = async (id) => {
  return connection.promise().query("DELETE FROM category  WHERE id = ?", [id]);
};

module.exports = {
  findAllCategories,
  insertCategorie,
  findOneCategorie,
  modifyOneCategories,
  deleteCategories,
};
