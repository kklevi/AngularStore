import { Component } from "@angular/core";
import { Product } from "./Product";
import { ProductService } from "./app.service.ProductService";

@Component({
    selector: 'app-products',
    template: `
        <div>
            <h1>Products</h1>
            
            <div>
                <ul>
                    <li *ngFor="let product of products; let i=index"
                        (click)="selectedProduct = product">
                    {{i}}: {{product.name}}
                    </li>
                </ul>
            </div>
            <app-productDetails [product] = "selectedProduct"
                (deleteProduct)="delete($event)">
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
    products: Product[];

    constructor(private productService: ProductService) { }

    //get products after contructor is called
    getProducts(): void{
        this.products = this.productService.getProducts();
    }
    ngOnInit() {
        this.getProducts();
        
    }

    selectedProduct : Product;

    delete(product: Product){
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }
}