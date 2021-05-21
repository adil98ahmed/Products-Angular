import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private prodServ: ProductsService) { }
  cartLength ;
  ngOnInit(): void {
    this.prodServ.cartLength.subscribe(data=>{this.cartLength=data})
  }

}
