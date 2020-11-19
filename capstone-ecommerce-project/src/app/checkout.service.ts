import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CheckoutService
{
    private purchaseUrl = "http://localhost:5000/api/purchases/recordPurchase";
    constructor(public httpClient: HttpClient){}

    recordPurchase(purchaseRef): Observable<any>
    {
      return this.httpClient.post(this.purchaseUrl, purchaseRef);
    }
}