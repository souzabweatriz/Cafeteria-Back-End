class OrderList {
    constructor(){
        this.orders = [];
    }
    addOrder(order){
        this.orders.push(order);
    }
    getOrderById(){
        const order = this.orders.findIndex(order => order.id == id);
        if (!order){
            throw new Error("Pedido não encontrado");
        }
        return order;
    } 
    deleteOrder(id){
        const index = this.orders.filter(order => order.id != id);
        if(index !== -1){
            return this.orders.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = OrderList;