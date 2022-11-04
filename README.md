# portfolio-back

Works with repository github 🔗 https://github.com/MoreauJonas/porftolio-front

This application allows you to manage and optimize your portfolio. You can add/edit/delete projects, skills, languages, categories, formations and user.
You can edit the data to your profil.

### Built With:

- Node.js
- Express
- MySQL
- JSON Web Token

# Getting Started 🚀 :

## ❗️ Prerequisites

Node.js : https://nodejs.org/en/download/  
MySQL : https://dev.mysql.com/downloads/mysql/

### Database :

```
blank = DBModel.sql,
sample data =  DB.sql
```

`↳ CREATE DATABASE portfolio`

Installation
1️⃣ Clone this repo git clone `https://github.com/MoreauJonas/portfolio-back.git`

2️⃣ Install NPM packages `npm install`

3️⃣ Set up `.env` by following `.env.sample's` settings which are necessary for the application to work.

4️⃣ Launch app `npm start`

5️⃣ Head to the front-end repository at 🔗 https://github.com/MoreauJonas/porftolio-front.git
and follow the inscructions there.

# **<ins>ALL</ins>** routes start with /api.

## Uploaded images start with /uploads.

- <details>
  <summary><b>PROJECTS ROUTES</b></summary>

  - ### projects info:

    1.  <details><summary><b>GET</b> /projects:</summary>
        "id":<br>
        "category":<br>
        "profil":<br>
        "languages":<br>
        "skills":<br>
        "name":<br>
        "description":<br>
        "picture":<br>
        "repo_front":<br>
        "url_resum_genesis":<br>
        "repo_back":<br>
        "deploy_url":<br>
        </details>

    1.  <details><summary><b>GET</b> one /projects/**[*id*]**</summary>

        "id":<br>
        "category":<br>
        "profil":<br>
        "languages":<br>
        "skills":<br>
        "name":<br>
        "description":<br>
        "picture":<br>
        "repo_front":<br>
        "url_resum_genesis":<br>
        "repo_back":<br>
        "deploy_url":<br>
        </details>

    1.  <details><summary><b>POST</b> /projects:</summary>
        "category":<br>
        "profil":<br>
        "languages":<br>
        "skills":<br>
        "name":<br>
        "description":<br>
        "picture":<br>
        "repo_front":<br>
        "url_resum_genesis":<br>
        "repo_back":<br>
        "deploy_url":<br>
        </details>

    1.  <details><summary><b>PUT</b> /projects/<b>[<i>id</i>]</b>:</summary>
        "id":<br>
        "category":<br>
        "profil":<br>
        "languages":<br>
        "skills":<br>
        "name":<br>
        "description":<br>
        "picture":<br>
        "repo_front":<br>
        "url_resum_genesis":<br>
        "repo_back":<br>
        "deploy_url":<br>
        </details>

    1.  **DELETE** /projects/**[*id*]**
    </details>

---

- ### skills info:

1.  <details><summary><b>GET</b> /skills/<b></summary>
    "id":<br>
    "skills name":<br>
    "picture":<br>
    "profil_id":<br>
    </details>

1.  <details><summary><b>GET</b> /projects/<b>[<i>id</i>]</b>/skills:</summary>
    "id":<br>
    "skills name":<br>
    "picture":<br>
    "profil_id":<br>
    </details>

1.  <details><summary><b>POST</b> /skills/<b></summary>
    "skills name":<br>
    "picture":<br>
    "profil_id":<br>
    </details>

1.  <details><summary><b>PUT</b> /projects/<b>[<i>id</i>]</b>:</summary>
    "id":<br>
    "skills name":<br>
    "picture":<br>
    "profil_id":<br>
    </details>

1.  **DELETE** /skills/**[*id*]**
    </details>

---

- ### languages:

  1.  <details><summary><b>GET</b> /languages/<b>[<i>id</i>]</b>/skills:</summary> 
      "id":<br>
      "skills name":<br>
      "picture":<br>
      "profil_id":<br>
      </details>

  1.  <details><summary><b>GET</b> /projects/<b>[<i>id</i>]</b>/languages:</summary> 
      "id":<br>
      "languages name":<br>
      "picture":<br>
      "profil_id":<br>
      </details>

  1.  <details><summary><b>POST</b> /languages/<b></summary> 
      "languages name":<br>
      "picture":<br>
      "profil_id":<br>
      </details>

  1.  <details><summary><b>PUT</b> /projects/<b>[<i>id</i>]</b>:</summary>
      "id":<br>
      "languages name":<br>
      "picture":<br>
      "profil_id":<br>
      </details>

  1.  **DELETE** /languages/**[*id*]**
  </details>

---

- <details>
  <summary><b>CATEGORY ROUTES</b></summary>

  - ### projects info:

    1.  <details><summary><b>GET</b> /categories:</summary>
        "id":<br>
        "name":<br>
        </details>

    1.  <details><summary><b>GET</b> one /categories/**[*id*]**</summary>
        "id":<br>
        "name":<br>
        </details>

    1.  <details><summary><b>POST</b> /categories:</summary>
        "name":<br>
        </details>

    1.  <details><summary><b>PUT</b> /categories/<b>[<i>id</i>]</b>:</summary>
        "id":<br>
        "name":<br>

    1.  **DELETE** /category/**[*id*]**
    </details>

---

- <details>
  <summary><b>FORMATIONS ROUTES</b></summary>

  - ### projects info:

    1.  <details><summary><b>GET</b> /formations:</summary>
        "id":<br>
        "name":<br>
        "description":<br>
        "picture":<br>
        "programme":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>GET</b> one /formations/**[*id*]**</summary>
        "id":<br>
        "name":<br>
        "description":<br>
        "picture":<br>
        "programme":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>POST</b> /formations:</summary>
        "name":<br>
        "description":<br>
        "picture":<br>
        "programme":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>PUT</b> /formations/<b>[<i>id</i>]</b>:</summary>
        "id":<br>
        "name":<br>
        "description":<br>
        "picture":<br>
        "programme":<br>
        "profil_id":<br>

    1.  **DELETE** /formations/**[*id*]**
    </details>

---

- <details>
  <summary><b>SKILLS ROUTES</b></summary>

  - ### projects info:

    1.  <details><summary><b>GET</b> /skills:</summary>
        "id":<br>
        "name":<br>
        "picture":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>GET</b> one /skills/**[*id*]**</summary>
        "id":<br>
        "name":<br>
        "picture":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>POST</b> /skills:</summary>
        "name":<br>
        "picture":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>PUT</b> /skills/<b>[<i>id</i>]</b>:</summary>
        "id":<br>
        "name":<br>
        "picture":<br>
        "profil_id":<br>
        </details>

    1.  **DELETE** /skills/**[*id*]**
    </details>

---

- <details>
  <summary><b>LANGUAGES ROUTES</b></summary>

  - ### projects info:

    1.  <details><summary><b>GET</b> /languages:</summary>
        "id":<br>
        "name":<br>
        "picture":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>GET</b> one /languages/**[*id*]**</summary>
        "id":<br>
        "name":<br>
        "picture":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>POST</b> /languages:</summary>
        "name":<br>
        "picture":<br>
        "profil_id":<br>
        </details>

    1.  <details><summary><b>PUT</b> /languages/<b>[<i>id</i>]</b>:</summary>
        "id":<br>
        "name":<br>
        "picture":<br>
        "profil_id":<br>
        </details>

    1.  **DELETE** /languages/**[*id*]**
    </details>

---

- <details>
  <summary><b>PROFIL ROUTES</b></summary>

  - ### projects info:

    1.  <details><summary><b>GET</b> /profil:</summary>
        "id":<br>
        "name":<br>
        "fristname":<br>
        "picture":<br>
        "mail":<br>
        "tel":<br>
        "adresse":<br>
        "ville":<br>
        "CP":<br>
        "age":<br>
        "description":<br>
        "git":<br>
        "linkedin":<br>
        "languages":<br>
        "formations":<br>
        "projects":<br>
        "skills":<br>
        </details>

    1.  <details><summary><b>GET</b> one /profil/**[*id*]**</summary>
        "id":<br>
        "name":<br>
        "fristname":<br>
        "picture":<br>
        "mail":<br>
        "tel":<br>
        "adresse":<br>
        "ville":<br>
        "CP":<br>
        "age":<br>
        "description":<br>
        "git":<br>
        "linkedin":<br>
        "languages":<br>
        "formations":<br>
        "projects":<br>
        "skills":<br>
        </details>

    1.  <details><summary><b>PUT</b> /profil/<b>[<i>id</i>]</b>:</summary>
                "id":<br>
                "name":<br>
                "fristname":<br>
                "picture":<br>
                "mail":<br>
                "tel":<br>
                "adresse":<br>
                "ville":<br>
                "CP":<br>
                "age":<br>
                "description":<br>
                "git":<br>
                "linkedin":<br>
                "languages":<br>
                "formations":<br>
                "projects":<br>
                "skills":<br>
                </details>
            </details>
        </details>

---

- <details>
  <summary><b>USER ROUTES</b></summary>

  - ### projects info:

    1.  <details><summary><b>GET</b> /user:</summary>
        "id":<br>
        "mail":<br>
        "password":<br>
        </details>

    1.  <details><summary><b>GET</b> one /user/**[*id*]**</summary>
        "id":<br>
        "mail":<br>
        "password":<br>
        </details>

    1.  <details><summary><b>POST</b> /user:</summary>
        "mail":<br>
        "password":<br>
        </details>

    1.  <details><summary><b>PUT</b> /user/<b>[<i>id</i>]</b>:</summary>
        "id":<br>
        "mail":<br>
        "password":<br>
        </details>

    1.  **DELETE** /user/**[*id*]**
    </details>

---
