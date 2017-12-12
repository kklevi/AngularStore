import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppProducts } from './app.component.products';
import { AppProductDetails } from './app.component.productDetails';
import { ProductService } from './app.service.ProductService';
import { CartModule } from './app.module.cart';
import { AppCart } from './app.component.cart';


@NgModule({
  declarations: [
    AppComponent,
    AppProducts,
    AppProductDetails
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
