const { request } = require("express");

const Item = require("../models/Item");
const ItemList = require("../models/ItemList");

const list = new ItemList();

list.addItem = new Item("Expresso simples", "R$5,00", "Bebida");
list.addItem = new Item("Café Latte", "R$10,00", "Bebida");
list.addItem = new Item("Macchiato", "R$15,00", "Bebida");
list.addItem = new Item("Fatia Bolo de Cenoura", "R$15,00", "Doce");
list.addItem = new Item("Salgado assado", "R$7,00", "Salgado");
list.addItem = new Item("Água", "R$3,00", "Bebida");
list.addItem = new Item("Salgado Frito", "R$5,00", "Salgado");
list.addItem = new Item("Pão de Queijo", "R$6,00", "Salgado");
list.addItem = new Item("Pão de Batata na chapa", "R$8,00", "Salgado");
list.addItem = new Item("Cappuccino", "R$9,00", "Bebida");
list.addItem = new Item("Caramel Macchiato", "R$10,00", "Bebida");
list.addItem = new Item("Vanilla Latte", "R$11,00", "Bebida");
list.addItem = new Item("Tapioca", "R$15,00", "Salgado");
list.addItem = new Item("Tapioca Recheada", "R$20,00", "Bebida");
list.addItem = new Item("Bolo Recheado", "R$10,00", "Doce");
list.addItem = new Item("Torta de Frango/Presunto e queijo", "R$20,00", "Salgado");
list.addItem = new Item("Pão na Chapa", "R$5,00", "Salgado");
list.addItem = new Item("Bauru", "R$9,00", "Salgado");
list.addItem = new Item("Chá", "R$4,00", "Bebida");
list.addItem = new Item("Água com gás", "R$3,50", "Bebida");
list.addItem = new Item("Frozen Lemonade", "R$20,00", "Bebida");
list.addItem = new Item("Frappuccino", "R$17,00", "Bebida");
list.addItem = new Item("Chocolate quente", "R$14,00", "Bebida");

const router = {
    getMenu: (req, res) => {
        try {
            const itens = list.getMenu();
            res.status(200).json(itens);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar menu', error});
        }
    }
}

module.exports = router;