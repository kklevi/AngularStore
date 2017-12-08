import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppProducts } from './app.component.products';
import { AppProductDetails } from './app.component.productDetails';
import { ProductService } from './app.service.ProductService';


@NgModule({
  declarations: [
    AppComponent,
    AppProducts,
    AppProductDetails
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
