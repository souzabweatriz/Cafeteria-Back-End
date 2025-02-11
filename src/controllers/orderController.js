const Order = require("../models.order");
const OrderList = require("../models/OrderList");

const list = new OrderList();

list.addOrder(new Order('Juliana', 'Salgado assado, Caramel Macchiato', 'Em espera'));
list.addOrder(new Order('Isabella', 'Torta de Frango, Cappuccino', 'Preparando'));
list.addOrder(new Order('Marcelo', 'Pão de Batata na chapa, Cappucino', 'Preparando'));
list.addOrder(new Order('Thiago', 'Tapioca, Café', 'Em espera'));
list.addOrder(new Order('Othavio', 'Pão na Chapa, Vanilla Latte', 'Em espera'));

const router = {
    addOrder: (req, res) => {
        try {
            const {name, item, status} = req.body;
            if (!name || item || status){
            throw new Error("Preencha todos os campos")
        }
        
        } 

        catch (error) {

        }
    }
}
