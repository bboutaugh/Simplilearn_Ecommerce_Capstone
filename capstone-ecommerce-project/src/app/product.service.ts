import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient ) {}

  storeProductDetailsInDB(prodRef): Observable<any>
  {
    return this.httpClient.post("http://localhost:9090/product/storeProduct",prodRef);
  }
}
