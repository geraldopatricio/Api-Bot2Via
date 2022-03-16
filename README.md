<p align="center">
  <img src="./src/assets/logo-fortbrasil.png" width="320" alt="Logo FortBrasil" /></a>
</p>


## Technologias usadas neste projeto

<a href="https://www.npmjs.com/package/typescript/" target="_blank"><img src="https://img.shields.io/badge/Typescript-4B8BBE?style=for-the-badge&logo=Typescript&logoColor=white" alt="Typescript" /></a> <a href="https://docs.docker.com/get-started/" target="_blank"><img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>   <a href="https://gitlab.com/Fortbrasil/microservicos/microservice-sendmail" target="_blank"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" /></a>



# API - ChatBot WhatsApp
API com vários EndPoints a serem usados pela Plataforma ALTU de ChatBot WhatsApp

# Subindo o Projeto via Docker
```bash

// para construir imagem
sudo docker build -t bot-api .

// para criar o container e publicar porta 3000
sudo docker run -p 3000:3000 --env-file .env --name bot-api-container bot-api start
```
## Endpoint´s Usados nesta API
<img src="./src/assets/endpoints.JPG">
