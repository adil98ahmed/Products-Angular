import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cart = [];
  products : any ;
  cartLengthBS  = new BehaviorSubject(this.cart.length)
  cartLength = this.cartLengthBS.asObservable();
  constructor(private http : HttpClient) {
    
  }
  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getcartItems(){
    return this.cart
  }
  getItemDetails(id){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
  setCartItem(obj){
    this.cart.push(obj);
    this.cartLengthBS.next(this.cart.length);
  }

}
