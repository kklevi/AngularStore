import { Component } from "@angular/core";
import { CartItem } from "./CartItem";
import { Input } from "@angular/core";
import { Cart } from "./Cart";

@Component({
    selector: 'app-cart',
    template: `
    <h2>Cart</h2>
        <table>
            <tr ngFor="let cartItem of cart.getCartItems(); let i=index">
                <th>{{cartItem.product.name}}</th>
            </tr>
        </table>
    `
})
export class AppCart{
    @Input()
    currentCart: Cart;

}