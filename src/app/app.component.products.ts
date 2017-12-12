import { Component } from "@angular/core";
import { Product } from "./Product";
import { ProductService } from "./app.service.ProductService";
import { Observable } from "rxjs/Observable";
import { Cart } from "./Cart";
import { CartItem } from "./CartItem";
import "rxjs/Rx";

@Component({
    selector: 'app-products',
    template: `

    <app-cart [currentCart]="cart">
    </app-cart>
        <div>
            <h1>Products</h1>
            
            <div>
                <ul>
                    <li *ngFor="let product of products$ | async; let i=index"
                        (click)="selectedProduct = product">
                    {{i}}: {{product.name}}
                    </li>
                </ul>
            </div>
            <app-productDetails [product] = "selectedProduct"
                (deleteProduct)="delete($event)"
                (addToCart)="add($event)">
            </app-productDetails>
        </div>
    `,
    styles: [`div{
                border-style: solid; 
                border-width: 5px; 
                border-color: red;
                margin-right: 200px;
            }`]
})
export class AppProducts{
    products: Observable<Product>;
    cart: Cart;

    constructor(private productService: ProductService) { }

    //get products after contructor is called
    getProducts(): void{
        this.products = this.productService.getProducts();
    }
    createCart(): void{
        this.cart = new Cart(new Array<CartItem>());
        this.cart.addCartItem(new CartItem(new Product(10, 100, "cat", "this is very fluffy, be carful"), 2));
    }
    ngOnInit() {
        this.getProducts();
        this.createCart();
    }

    selectedProduct: Product;
    

    delete(product: Product){
        this.products.filter(p => p === product);
    }
    add(product: Product){
        var index = this.cart.getCartItems().findIndex((c) => c.product === product);

        if(index == -1){
            this.cart.addCartItem(new CartItem(product, 1));
        }else{
            this.cart.getCartItems()[index].quantity++;
        }
    }
}