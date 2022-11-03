const connection = require("../db-config");

const findAllSkill = async () => {
  return connection.promise().query("SELECT * FROM skills");
};

const findOneSkill = async (skillId) => {
  return connection
    .promise()
    .query("SELECT * FROM skills WHERE id=?", [skillId]);
};

const insertSkills = async ({ name }, picture) => {
  return connection
    .promise()
    .query("INSERT INTO skills (name, picture, profil_id) VALUES (?,?,?)", [
      name,
      picture,
      (profil_id = 1),
    ]);
};

const modifyOneSkill = async (id, newAttributes) => {
  return connection
    .promise()
    .query("UPDATE skills SET ? WHERE id = ?", [newAttributes, id]);
};

const deleteSkill = async (id) => {
  return connection.promise().query("DELETE FROM skills  WHERE id = ?", [id]);
};

module.exports = {
  findAllSkill,
  insertSkills,
  findOneSkill,
  modifyOneSkill,
  deleteSkill,
};
