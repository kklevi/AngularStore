import { Product } from "./Product";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{
    private products : Product[];

    constructor(){
        this.products = [new Product(1, 100, 'truck', 'this is a very small truck'), 
        new Product(5, 30, 'hammer', 'The best hammer ever made')];
    }

    getProducts(): Product[]{
        return this.products;
    }
}