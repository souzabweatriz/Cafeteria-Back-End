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
            throw new Error("Preencha todos os campos");
        }
        const order = new Order (name, item, status);
        res.status(201).json({message: "Pedido feito com sucesso!", order});
        }
        catch (error) {
            res.status(400).json({message: "Erro ao adicionar pedido", error});
        }
    },
    getOrderbyId: (req, res) => {
        try {
            const id = req.params.id
            res.status(200).json(list.getOrderById(id));
        } catch (error) {
            res.status(404).json({message: "Erro ao encontrar pedido por Id", error});
        }
    },
    deleteOrder: (req, res) => {
        try {
            list.deleteOrder(req.params.id);
            res.status(200).json({message: "Pedido deletado com sucesso"});
        } catch (error) {
           res.status(403).json({message: "Não foi possível cancelar o pedido"});
        }
    }
};

module.exports = OrderList;