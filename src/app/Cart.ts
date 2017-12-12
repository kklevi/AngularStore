import { Observable } from "rxjs/Observable";
import { CartItem } from "./CartItem";
import "rxjs/Rx";
import { Product } from "./Product";

export class Cart {
    private cartItems: CartItem[];

    constructor(cartItems: CartItem[]) {
        this.cartItems = cartItems;
    }

    addCartItem(cartItem: CartItem): void{
        this.cartItems.push(cartItem);
    }

    removeCartItem(cartItem: CartItem): void{
        this.cartItems = this.cartItems.filter((c) => c !== cartItem);
    }

    getCartItems(): CartItem[]{
        return this.cartItems;
    }
}