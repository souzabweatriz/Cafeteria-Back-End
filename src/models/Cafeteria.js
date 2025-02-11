const { v4: uuid4 } = require("uuid");

class Cafeteria {
    constructor(name, price, type){
        this.id = uuid4();
        this.nome = name;
        this.preco = price;
        this.tipo = type;
    }
}

module.exports = Cafeteria;