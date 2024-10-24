<p align="center">
  <img width="500" src="https://s3-alpha-sig.figma.com/img/c3ab/8792/0049cedc12da45342fdf50d30e30cabb?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AlZDNjmIIY7c6YXpjRadrA76-OxNTpJlHZzptvFWho2DWTItXS9W-hPNZrB1Wm9S1qkXPAsTUkkPSH-aGBb7QgIEvdG6T~xxR7~pZf84YTSDB3QaUueUkyTpmIV05dpFiLjMl2fyLIojeoLQoYKp1XvyFtMI6HEfBVPIuveMc-GlhlNAFixdbJ9qqTxwmrFn5MjZuHbfa-wxRv0dKcbnMJ2vrNA0zUC1-OJPIe5~lRDqa-2okVg3v99m7kTvGqcn~qWbx8sBlfIGXR4PgRI4EA~pOaEX9naafgLYD2uG790uzYVKUny1iEZ0FqLaBUyv6aeoO3xOhyGHBvoJZaYR5g__" alt="enersok">
  <h1 align="center">
    Enersok website
  </h1>
</p>

<p align="center">
  <a title="Team64" href="https://github.com/Team64-Developers">
      <img src="https://img.shields.io/badge/MADE%20by-Team64-ff0000?labelColor=black&style=for-the-badge" alt="Made by Team64"/>
  </a>
  <a title="Apache-2.0 License" href="LICENSE">
    <img src="https://img.shields.io/badge/license-Apache-ff0000?labelColor=black&style=for-the-badge" alt="Apache-2.0 License" />
  </a>
   <a title="Node.js compatibility" href="LICENSE">
    <img src="https://img.shields.io/badge/Node.js->=18.0.0 <=20.x.x-006600?labelColor=black&style=for-the-badge" alt="node compatibility" />
  </a>
</p>

## 1. Used technologies
<p align="center"><strong>Backend</strong></p>
<p align="center">
<img src="https://img.shields.io/badge/Strapi-2E7EEA?style=for-the-badge&logo=strapi&logoColor=white" />
<img src="https://img.shields.io/badge/SqLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" />
</p>

<p align="center"><strong>Frontend</strong></p>
<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/Radix-black?style=for-the-badge&logo=radix-ui&logoColor=white" />
</p>

## 2. Getting started
> [!NOTE]
> ### Prerequisites
> - Windows/MacOS/Ubuntu OS
> - VS Code, Atom or Webstorm code editor
> - Node.js +18
> - Git
> - SSD is optional, but greeted

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

After installing NPM packages, open your code editor. Also, switch to `dev` branch and run the following command:
> [!IMPORTANT]
> ### Running backend
> Images not synced with github. So to run backend you need to get the images from the server (folder: public) and put it in your local public folder.
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
