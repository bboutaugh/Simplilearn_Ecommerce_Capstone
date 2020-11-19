import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService 
{
  private productUrl = "http://localhost:5000/api/products/storeProduct";
  constructor(public httpClient: HttpClient ) {}

  storeProduct(productRef): Observable<any>
  {
    return this.httpClient.post(this.productUrl, productRef);
  }

  getProducts():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>("http://localhost:5000/api/products/getProducts");
  }

  getProductsByGender(productGender):Observable<Product[]>
  {
    return this.httpClient.get<Product[]>("http://localhost:5000/api/products/getProductsByGender/"+productGender);
  }

  getProductByID(productID):Observable<Product>
  {
    return this.httpClient.get<Product>("http://localhost:5000/api/products/getProductByID/"+productID);
  }

  getProductsByBrand(productBrand):Observable<Product[]>
  {
    return this.httpClient.get<Product[]>("http://localhost:5000/api/products/getProductsByBrand/"+productBrand);
  }

  updateProduct(productRef):Observable<any>
  {
    return this.httpClient.put("http://localhost:5000/api/products/updateProduct", productRef);
  }

  deleteProduct(productID):Observable<any>
  {
    return this.httpClient.delete("http://localhost:5000/api/products/deleteProduct/"+productID);
  }

  
}
