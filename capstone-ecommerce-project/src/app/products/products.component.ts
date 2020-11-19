import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {CartItem} from '../CartItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Array<Product>;
  cartItems:Array<CartItem>
  constructor(public productService:ProductService) { }

  ngOnInit(): void 
  {
      this.productService.getProducts().subscribe(data=>this.products=data);
  }

  
  public addToCart(product:Product):void
  {
    let flag:number = -1;
    if(localStorage.getItem('cartItems') == null)
    {
      let cartItems: any = [];
      let item: CartItem = new CartItem(product, 1);
      console.log(CartItem);
      cartItems.push(JSON.stringify(item));
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    else
    {
      let cartItems: any = JSON.parse(localStorage.getItem('cartItems'));
      for(var i=0;i<cartItems.length;i++)
      {
        let item: CartItem = JSON.parse(cartItems[i]);
        if(product.productID == item.product.productID)
        {
          item.quantity += 1;
          cartItems[i] = JSON.stringify(item);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          flag = 1;
        }
      }
    if(flag==-1)
      {
        let item: any = new CartItem(product,1);
        cartItems.push(JSON.stringify(item));
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }
  }

}
}
