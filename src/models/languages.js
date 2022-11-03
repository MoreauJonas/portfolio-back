const connection = require("../db-config");

const findAllLanguages = async () => {
  return connection.promise().query("SELECT * FROM languages");
};

const findOneLanguages = async (languageId) => {
  return connection
    .promise()
    .query("SELECT * FROM languages WHERE id=?", [languageId]);
};

const insertLanguage = async ({ name }, picture) => {
  return connection
    .promise()
    .query("INSERT INTO languages (name, picture, profil_id) VALUES (?,?,?)", [
      name,
      picture,
      (profil_id = 1),
    ]);
};

const modifyOneLanguage = async (id, newAttributes) => {
  return connection
    .promise()
    .query("UPDATE languages SET ? WHERE id = ?", [newAttributes, id]);
};

const deleteLanguage = async (id) => {
  return connection
    .promise()
    .query("DELETE FROM languages  WHERE id = ?", [id]);
};

module.exports = {
  findAllLanguages,
  insertLanguage,
  findOneLanguages,
  modifyOneLanguage,
  deleteLanguage,
};
