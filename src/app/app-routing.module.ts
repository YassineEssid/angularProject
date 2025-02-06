import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormProductReactiveComponent } from './form-product-reactive/form-product-reactive.component';
import { AddCategoryComponent } from './add-category/add-category.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'products/:x', component:ProductsCategoryComponent},
  {path:'product', component:ProductsCategoryQPComponent},
  {path:'add', component:FormProductComponent},
  {path:'addR', component:FormProductReactiveComponent},
  {path:'addCat', component:AddCategoryComponent},
  { path: 'add-category/:id', component: AddCategoryComponent },

  {path: 'contact',loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'apropos',loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule)},
  {path: 'prod',loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'profil',loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},



  
  {path:'**',component:NotFoundPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
