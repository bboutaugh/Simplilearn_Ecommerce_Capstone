import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {CartItem} from '../CartItem';
import { ActivatedRoute } from '@angular/router';
import {CheckoutService} from '../checkout.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products:Array<Product>;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private checkoutService: CheckoutService,
    private productService:ProductService) { }

  cartProducts: Array<CartItem> = [];
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  result: string;
  totalPriceString: string = this.totalPrice.toString();

  ngOnInit(): void 
  { 
    this.activatedRoute.params.subscribe(params => {
        this.loadCart();
    });
  }

  loadCart(): void
   {
		this.totalPrice = 0;
		this.cartItems = [];
		let cart = JSON.parse(localStorage.getItem('cartItems'));
    for (var i = 0; i < cart.length; i++) 
    {
			let item = JSON.parse(cart[i]);
			this.cartItems.push({
				product: item.product,
				quantity: item.quantity
			});
			this.totalPrice += item.product.productPrice * item.quantity;
		}
   }
   
   removeItem(id: number): void {
		let cart: any = JSON.parse(localStorage.getItem('cartItems'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: CartItem = JSON.parse(cart[i]);
			if (item.product.productID == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cartItems", JSON.stringify(cart));
		this.loadCart();
  }

  purchaseInput = new FormGroup({
    totalPrice: new FormControl(),
    creditCardNumber: new FormControl(),
    address: new FormControl()
  });
  
  recordPurchase(): void
  {
    this.checkoutService.recordPurchase(this.purchaseInput.value).subscribe(data=>this.result=data.msg);
  }
    
}
