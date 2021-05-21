import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProducts : any;
  constructor(private productServ : ProductsService) { 
  }
  ngOnInit(): void {
    this.productServ.getProducts().subscribe((data)=>{
      this.allProducts = data;
    })
  }
  addToCart(id){
    for(var i = 0 ; i < this.allProducts.length ; i++){
      if(this.allProducts[i]['id'] == id){
      this.productServ.setCartItem(this.allProducts[i]);
        break;
      }
    }
    console.log(this.productServ.cart)
  }

}
