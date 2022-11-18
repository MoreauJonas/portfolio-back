const connection = require("../db-config");

const findAllProfil = async () => {
  return connection
    .promise()
    .query(
      "SELECT pro.id ,pro.name, pro.fristname,pro.picture,pro.mail, pro.tel ,pro.adresse,pro.ville, pro.CP,pro.age,pro.description,pro.git, pro.linkedin,group_concat(DISTINCT l.name SEPARATOR ', ') as languages,group_concat(DISTINCT l.picture SEPARATOR ', ') as url,group_concat(DISTINCT f.name SEPARATOR ', ') as formations,group_concat(DISTINCT p.name SEPARATOR ', ') as projects, group_concat(DISTINCT  s.name SEPARATOR ', ')  as skills FROM profil pro  INNER JOIN formation f ON  pro.id = f.profil_id INNER JOIN projects p ON  pro.id = p.profil_id INNER JOIN skills s ON  pro.id =p.profil_id INNER JOIN languages l ON pro.id  =  l.profil_id"
    );
};

const modifyOneProfil = async (id, newAttributes) => {
  return connection
    .promise()
    .query("UPDATE profil SET ? WHERE id = ?", [newAttributes, id]);
};

module.exports = {
  findAllProfil,
  modifyOneProfil,
};
