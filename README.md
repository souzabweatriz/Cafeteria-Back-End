# ☕ StarCafé- Back-End 

## 📌 Sobre o projeto
Este projeto foi desenvolvido como parte do curso técnico em Desenvolvimento de Sistemas do SENAI Valinhos, na disciplina de Back-End com o objetivo de aprimorar nossos conhecimentos no Back-End e CRUD

## 🚀 Funcionalidades

🍰 Get menu- Receber todos os itens do cardápio 

✍ Add Order- Adicionar um pedido

📜 Get All Orders- Pegar todos os pedidos

📎 Get Order By Id- Pegar pedidos por Id

❌ Delete- Deletar pedidos por Id

## 🛠 Tecnologias

🌐 HTML: Estrutura

🎨 CSS: Estilização

⚡ JavaScript: Funcionalidade

## 📃 Documentação

### 📌 Requisição

## Get Menu

GET /menu

HTTP 1.1 200 OK

HTTP ERROR 404 Not Found

Host: localhost:4000

Content-Type: application/json

Location: /api/menu

X-Powered-By: Express

## 📌 Exemplo de corpo da requisição

{
    "name": "Suco Tang",
    "price": "R$2.90",
    "type": "Bebida"
}

## Post add order

GET /orders

HTTP 1.1 201 Created

HTTP ERROR 400 Bad request

Host: localhost:4000

Content-Type: application/json

Location: /api/orders

X-Powered-By: Express

## 📌 Exemplo de corpo da requisição

{
    "name": "Carla",
    "item": "Pão de queijo",
    "status": "Pronto"
}


## Get all orders

GET /orders

HTTP 1.1 200 OK

HTTP ERROR 404 Not Found

Host: localhost:4000

Content-Type: application/json

Location: /api/orders

X-Powered-By: Express

## 📌 Exemplo de corpo da requisição
 {
        "id": "193e99e5-0bf8-4c56-a215-584948229c6e",
        "name": "Juliana",
        "item": "Salgado assado, Caramel Macchiato",
        "status": "Em espera"
    }


## Get orders by id
 
Get /orders

HTTP 1.1 200 OK

HTTP ERROR 404 Not Found

Host: localhost:4000

Content-Type: application/json

Location: /api/orders:id

X-Powered-By: Express

## 📌 Exemplo de corpo da requisição

{
    "id": "6aa666af-330d-4aae-b0e7-a7d54092d563",
    "name": "Isabella",
    "item": "Torta de Frango, Cappuccino",
    "status": "Preparando"
}

## Delete orders

Delete /orders

HTTP 1.1 200 OK

HTTP ERROR 403 Forbidden

Host: localhost:4000

Content-Type: application/json

Location: /api/orders:id

X-Powered-By: Express

## 📌 Exemplo de corpo da requisição

{
    "message": "Pedido cancelado com sucesso"
}
  



## 📜 Licença

Este projeto está sob a licença MIT.