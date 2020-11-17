import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  formData: any = {};
  errors: any = [];

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {}

  register(): void
  {
    this.errors = [];
    this.auth.register(this.formData)
    .subscribe(()=>{
      this.router.navigate(['/auth/user-login'],{queryParams: {registered: 'success'}});
      },
      (errorResponse)=>{
        this.errors.push(errorResponse.error.error);
    
    });
  }
}
