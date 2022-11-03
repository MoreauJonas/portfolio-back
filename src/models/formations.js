const connection = require("../db-config");

const findAllFormations = async () => {
  return connection.promise().query("SELECT * FROM formation");
};

const findOneFormation = async (formationId) => {
  return connection
    .promise()
    .query("SELECT * FROM formation WHERE id=?", [formationId]);
};

const insertFormation = async ({ name, description, programme }, picture) => {
  return connection
    .promise()
    .query(
      "INSERT INTO formation (name, description, picture, programme, profil_id) VALUES (?,?,?,?,?)",
      [name, description, picture, programme, (profil_id = 1)]
    );
};

const modifyOneFormation = async (id, newAttributes) => {
  return connection
    .promise()
    .query("UPDATE formation SET ? WHERE id = ?", [newAttributes, id]);
};

const deleteFormation = async (id) => {
  return connection
    .promise()
    .query("DELETE FROM formation  WHERE id = ?", [id]);
};

module.exports = {
  findAllFormations,
  insertFormation,
  findOneFormation,
  modifyOneFormation,
  deleteFormation,
};
