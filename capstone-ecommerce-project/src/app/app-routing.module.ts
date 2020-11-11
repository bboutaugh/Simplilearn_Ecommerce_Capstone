import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ProductsComponent} from './components/products/products.component';
import {AdminLoginComponent} from './components/admin-login/admin-login.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
export const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'products',component:ProductsComponent},
  {path:'checkout',component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
