import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : any;
  constructor(private productServ : ProductsService) { 
  }
  ngOnInit(): void {
    this.cartItems = this.productServ.getcartItems()
  }
  deleteItem(id){
    for(var i = 0 ; i<this.productServ.cart.length ;i++){
      if(this.productServ.cart[i]['id']==id){
        this.productServ.cart.splice(i,1);
      }
    }
  }

}
