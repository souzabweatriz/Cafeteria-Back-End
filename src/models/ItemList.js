class ItemList {
    constructor(){
        this.menu = [];
    }
   addItem(item) {
    this.menu.push(item);
   }
}

module.exports = ItemList