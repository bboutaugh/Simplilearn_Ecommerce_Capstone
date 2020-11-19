import { Component } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from './auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import {CartItem} from './CartItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone-ecommerce-project';
  constructor(public auth:AuthService, private router:Router){}
  
 

  ngOnInit():void
  {}

  logout():void
  {
    this.auth.logout();
    this.router.navigate(['/auth/login'],{queryParams:{loggedOut:'success'}});
  }

}
