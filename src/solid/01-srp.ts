(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        public getProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        public postProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {

        private masterEmail: String = 'wcdz@google.com';

        public sendEmail(emailList: String[], template: 'to-clients' | 'to-admins') {
            if (emailList.length > 0) {
                console.log(`Enviando correo a los clientes ${template}`);
            }
        }

    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        public loadProduct(id: number) {
            this.productService.getProduct(id);
        }

        public saveProduct(product: Product) {
            this.productService.postProduct(product);
        }

        public notifyClients() {
            this.mailer.sendEmail(['sofia@gmail.com'], 'to-clients');
        }

    }

    class CartBloc {
        private itemsInCart: Object[] = [];

        public addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }


    const productService = new ProductService();
    const mailer = new Mailer();


    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();