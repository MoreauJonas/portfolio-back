const connection = require("../db-config");

const findAllProjects = async () => {
  return connection
    .promise()
    .query(
      "SELECT p.id id, c.name category, pro.name profil, group_concat(DISTINCT l.name SEPARATOR ', ') as languages, group_concat(DISTINCT sk.name SEPARATOR ', ') as skills, p.name, p.description, p.picture, p.repo_front, p.repo_back, p.deploy_url FROM projects p JOIN category c ON c.id = p.category_id JOIN profil pro ON pro.id = p.profil_id LEFT JOIN skills_has_projects shp ON shp.projects_id = p.id LEFT JOIN skills sk ON shp.skills_id = sk.id LEFT JOIN languages_has_projects lhp ON lhp.projects_id = p.id LEFT JOIN languages l ON lhp.languages_id = l.id GROUP BY id ORDER BY p.id"
    );
};

const findOneProject = async (projectsId) => {
  return connection
    .promise()
    .query(
      "SELECT p.id id, c.name category, pro.name profil, group_concat(DISTINCT l.name SEPARATOR ', ') as languages, group_concat(DISTINCT sk.name SEPARATOR ', ') as skills, p.name, p.description, p.picture, p.repo_front, p.repo_back, p.deploy_url FROM projects p JOIN category c ON c.id = p.category_id JOIN profil pro ON pro.id = p.profil_id LEFT JOIN skills_has_projects shp ON shp.projects_id = p.id LEFT JOIN skills sk ON shp.skills_id = sk.id LEFT JOIN languages_has_projects lhp ON lhp.projects_id = p.id LEFT JOIN languages l ON lhp.languages_id = l.id WHERE p.id= ? GROUP BY id ORDER BY p.id",
      [projectsId]
    );
};
const findProjectSkills = async (projectsId) => {
  return connection
    .promise()
    .query(
      "SELECT s.id, s.name 'skills name', s.picture, p.profil_id FROM projects p  LEFT JOIN skills_has_projects pp ON pp.projects_id = p.id LEFT JOIN skills s ON s.id = pp.skills_id WHERE p.id = ?",
      [projectsId]
    );
};

const findProjectLanguages = async (projectsId) => {
  return connection
    .promise()
    .query(
      "SELECT l.id, l.name 'languages name', l.picture, l.profil_id FROM projects p  LEFT JOIN languages_has_projects lhp ON lhp.projects_id = p.id LEFT JOIN languages l ON l.id = lhp.languages_id WHERE p.id = ?",
      [projectsId]
    );
};

const insertProjects = async (
  { name, description, repo_front, repo_back, deploy_url, category_id },
  picture
) => {
  return connection
    .promise()
    .query(
      "INSERT INTO projects (name, description, picture, repo_front, repo_back, deploy_url, category_id, profil_id)VALUES (?,?,?,?,?,?,?,?)",
      [
        name,
        description,
        picture,
        repo_front,
        repo_back,
        deploy_url,
        category_id,
        (profil_id = 1),
      ]
    );
};

const modifyOneProject = async (id, newAttributes) => {
  return connection
    .promise()
    .query("UPDATE projects SET ? WHERE id = ?", [newAttributes, id]);
};

const deleteProject = async (id) => {
  return connection.promise().query("DELETE FROM projects  WHERE id = ?", [id]);
};

module.exports = {
  findAllProjects,
  findOneProject,
  findProjectSkills,
  findProjectLanguages,
  insertProjects,
  modifyOneProject,
  deleteProject,
};
