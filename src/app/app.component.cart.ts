import { Component } from "@angular/core";
import { CartItem } from "./CartItem";
import { Product } from "./Product";
import { Input } from "@angular/core";
import { Cart } from "./Cart";

@Component({
    selector: 'app-cart',
    template: `
    <h2>Cart</h2>
        <table>
            <tr *ngFor="let cartItem of currentCart.getCartItems(); let i=index">
                <th>{{cartItem.product.name}}</th>
                <th>{{cartItem.product.price}}</th>
                <th>{{cartItem | sum}}</th>
            </tr>
        </table>
    `
})
export class AppCart{
    @Input()
    currentCart: Cart;

}