import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCart } from "./app.component.cart";
import { BrowserModule } from "@angular/platform-browser/src/browser";
import { SumPipe } from "./sumPrice.pipe";

@NgModule({
    declarations: [AppCart, SumPipe],
    imports: [
        CommonModule
        ],
    exports: [
        AppCart
    ]
})
export class CartModule { }