import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProductsComponent} from './products/products.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {AdminComponent} from './admin/admin.component';

export const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'products',component:ProductsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
