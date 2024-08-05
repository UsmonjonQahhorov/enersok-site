<h1 align="center">Enersok website</h1>

## 1. Used technologies
<p align="center"><strong>Backend</strong></p>
<p align="center">
<img src="https://img.shields.io/badge/Strapi-2E7EEA?style=for-the-badge&logo=strapi&logoColor=white" />
<img src="https://img.shields.io/badge/SqLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" />
</p>

<p align="center"><strong>Frontend</strong></p>
<p align="center">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Radix-black?style=for-the-badge&logo=radix-ui&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
</p>

## 2. Getting started

### Setting up Dev

Clone the project to your local development machine, where you are already logged in your GitHub profile and open a terminal in your work folder:

```shell
git clone https://github.com/Alfakon-Systems/enersok-website.git
cd enersok-website

npm run frontend:prepare
npm run backend:prepare
```
Then, you have to wait until all npm packages are successfully downloaded.

### Running the Dev

After installing NPM packages, open your code editor. Also, switch to `develop` branch and run the following command:

### Running backend
Images not synced with github. So to run backend you need to get the images from the server (folder: public) and put it in your local public folder.
Database synced with github, but to run actual data you need to use the database from the server (folder: database) and put it in your local database.

```shell
npm run backend:build
npm run backend:dev
```

### Running frontend

```shell
npm run frontend:dev
```

After building, you'll be able to visit the dev version of the project on the following:\
Frontend: [http://localhost:3000](http://localhost:3000)\
Backend: [http://localhost:1337/admin](http://localhost:1337/admin)