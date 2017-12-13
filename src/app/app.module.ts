import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { AppProducts } from './app.component.products';
import { AppProductDetails } from './app.component.productDetails';
import { ProductService } from './app.service.ProductService';
import { CartModule } from './app.module.cart';
import { AppCart } from './app.component.cart';
import { ProductForm } from './productForm.component';



@NgModule({
  declarations: [
    AppComponent,
    AppProducts,
    AppProductDetails,
    ProductForm
  ],
  imports: [
    BrowserModule,
    CartModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
