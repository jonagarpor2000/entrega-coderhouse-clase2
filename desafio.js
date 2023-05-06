class ProductManager {
    #products
    #error
    constructor() {
        this.#products = [];
        this.#error=undefined;
    };

    getProducts = () => this.#products

    getProductsById = (id) => {
        const product = this.#products.find(producto => producto.id === id);
        if (!product) return 'Not Found'
        return product
    }

    #generateId = () => (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id + 1

    #validateProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            this.#error = `[${code}]: campos incompletos`
        } else {
            const found = this.#products.find(producto => producto.code === code)
            if (found) this.#error = `[${code}]: el code ya existe`
            else this.#error = undefined
        }
    }

    addProduct = (title, description, price, thumbnail,code,stock) => {
        this.#validateProduct(title, description, price, thumbnail,code,stock)
        if (this.#error === undefined) 
            this.#products.push({id: this.#generateId(),title, description,  price, thumbnail,code,stock})
        else 
            console.log(this.#error)
    }

}

const product = new ProductManager()
product.addProduct('Chancleta', 'Es una chancleta',195,'https://josephine.com.uy/wp-content/uploads/2022/08/SON01095-scaled.jpg','00A',2);
product.addProduct('Zapato', 80000)  //error!! Faltan  datos
product.addProduct('Bizcocho', 'Es un Bizcocho',195,'https://josephine.com.uy/wp-content/uploads/2022/08/SON01095-scaled.jpg','01ABC',3);
product.addProduct('Yeskero', '¿Teneh fuego ameho?',132,'https://josephine.com.uy/wp-content/uploads/2022/08/SON01095-scaled.jpg','007NightFire',0);
console.log(product.getProducts())
console.log(product.getProductsById(2))
console.log(product.getProductsById(1))
console.log(product.getProductsById(9))