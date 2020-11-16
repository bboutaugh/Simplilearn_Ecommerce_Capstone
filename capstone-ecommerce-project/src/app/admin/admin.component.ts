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
         productQuantity: new FormControl(),
         productSize: new FormControl(),
         productBrand: new FormControl(),
         productDiscount: new FormControl()
  });

  constructor(public productService:ProductService) { }
  result:string;
  ngOnInit(): void {
  }

  storeProduct():void
  {
    this.productService.storeProductDetailsInDB(this.productInput.value).subscribe(data=>this.result=data.msg);
  }

}
