# API do projeto adote

## Instalação

Esse projeto utiliza Yarn, portanto para instalar precisa rodar no terminal o seguinte comando

`yarn`

Será necessário o arquivo .env com a senha para acesso ao mongodb em ambiente de dev. Se você pretende cooperar com esse projeto, basta enviar uma mensagem para liberação do acesso.

## Ambiente de Dev

No ambiente de dev, após instalado os módulos com o comando yarn, basta rodar o comando

`yarn dev`

## Produção

Para gerar o pacote de produção, rode o comando

`yarn build`

## Rotas

| Rotas Users   | Método | Descrição                                     |
| ------------- | ------ | --------------------------------------------- |
| /users/:id    | GET    | Lista o usuário pelo id                       |
| /users/create | POST   | Cria o usuário                                |
| /users/login  | POST   | Faz o login do usuário e responde com o token |

| Rotas Pages   | Método | Descrição                                     |
| ------------- | ------ | --------------------------------------------- |
| /pages/create | POST   | Cria página                                   |

| Rotas Pets    | Método | Descrição                                     |
| ------------- | ------ | --------------------------------------------- |
| /pets/create  | POST   | Cria Pets                                     |