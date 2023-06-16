

class Product {
    constructor(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

    increaseProductQuantity(increment) {
        this.quantity += increment;
    }

    decreaseProductQuantity(decrement) {
        this.quantity -= decrement;
    }
}

class Shop {
    constructor(name) {
        this.name = name;
        this.products = {}
    }

    addProduct(id, name, quantity) {
        let newProduct = new Product(id, name, quantity);
        this.products[id] = newProduct;
    }

    buyProduct(id, quantity) {
        const product = this.products[id];
        
        if (!product) {
            console.log('product not found');
            return;
        }
        if (product.quantity < quantity) {
            console.log("Out of product(s)");
            return;
        }

        product.decreaseProductQuantity(quantity);

    }

    refundProduct(id, quantity) {
        const product = this.products[id];
        
        if (!product) {
            console.log('product not found');
            return;
        }

        product.increaseProductQuantity(quantity);

    }
}

const shop = new Shop("Kelvin's Super Markets LTD");
console.log("shop before adding product(s)", shop);
shop.addProduct("2897438728479384984059", "IPhone 14", 20);
shop.addProduct("5365622332179384984059", "IPhone 15", 50);
console.log("shop after adding product(s)", shop);
shop.buyProduct("2897438728479384984059", 2);
console.log("shop after buying product(s)", shop);
shop.refundProduct("2897438728479384984059", 1);
console.log("shop after refunding product(s)", shop);
