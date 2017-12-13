import { Product } from "./Product";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class ProductService{
    private products : Observable<Product[]>;

    constructor(){
        this.products = Observable.of([new Product(1, 100, 'truck', 'this is a very small truck'), 
                                      new Product(5, 30, 'hammer', 'The best hammer ever made')]);
         
    }

    getProducts(): Observable<Product[]>{
        return this.products;
    }
}