import {ProductService} from '../product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productInput = new FormGroup({
         productID: new FormControl(),
         productName: new FormControl(),
         productPrice: new FormControl(),
         productImage: new FormControl(),
         productQuantity: new FormControl(),
         productSize: new FormControl(),
         productBrand: new FormControl(),
         productDiscount: new FormControl(),
         productGender:new FormControl()
  });

  constructor(public productService:ProductService) { }
  result:string;
  ngOnInit(): void {
  }

  storeProduct():void
  {
    console.log("button clicked");
    this.productService.storeProduct(this.productInput.value).subscribe(data=>this.result=data.msg);
  }

}
