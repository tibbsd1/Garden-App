import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"products", component: ProductsComponent},
  {path:"contact", component:ContactComponent},
  {path: 'login', component: LoginComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
