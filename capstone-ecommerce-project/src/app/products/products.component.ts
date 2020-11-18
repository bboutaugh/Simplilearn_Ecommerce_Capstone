import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Array<Product>;
  constructor(public productService:ProductService) { }

  ngOnInit(): void 
  {
    
      this.productService.getProducts().subscribe(data=>this.products=data);
    
  }

}
