import { Pipe, PipeTransform } from "@angular/core";
import { CartItem } from "./CartItem";

@Pipe({
    name: 'sum'
})
export class SumPipe implements PipeTransform{
    transform(value: CartItem){
        if(!value){return null;}

        return value.product.price * value.quantity;
    }
}