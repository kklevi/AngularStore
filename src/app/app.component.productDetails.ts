import { Component } from "@angular/core";
import { Product } from "./Product";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'app-productDetails',
    template: `
        <p *ngIf="product">
            Description: {{product.description}}
            <button (click)="requestDelete()">delete</button>
        </p>
    `
})
export class AppProductDetails{
    @Input()
    product : Product;

    @Output()
    deleteProduct = new EventEmitter<Product>();

    @Output()
    addToCart = new EventEmitter<Product>();

    requestDelete(){
        this.deleteProduct.emit(this.product);
    }
    requestAddToCart(){
        this.addToCart.emit(this.product);
    }
}