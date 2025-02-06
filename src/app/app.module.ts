import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormProductReactiveComponent } from './form-product-reactive/form-product-reactive.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighlightDirective,
    NotFoundPageComponent,
    ProductsCategoryComponent,
    ProductsCategoryQPComponent,
    FormProductComponent,
    FormProductReactiveComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
