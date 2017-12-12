import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCart } from "./app.component.cart";
import { BrowserModule } from "@angular/platform-browser/src/browser";

@NgModule({
    declarations: [AppCart],
    imports: [
        CommonModule
        ],
    exports: [
        AppCart
    ]
})
export class CartModule { }