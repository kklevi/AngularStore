import { Component } from "@angular/core";
import { Output } from "@angular/core";
import { Product } from "./Product";
import { EventEmitter } from "@angular/core";
import {NgForm} from '@angular/forms';

@Component({
    selector:'product-form',
    templateUrl: 'productForm.component.html'
})
export class ProductForm{
    @Output()
    createProduct = new EventEmitter<Product>();

    submit(productForm: NgForm){
        var product = new Product(
            productForm.value.id, productForm.value.price, 
            productForm.value.name, productForm.value.description);
        console.log(product.id);
        this.createProduct.emit(product);
    }
}