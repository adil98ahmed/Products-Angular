import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : any;
  allProducts : any;
  id:any;
  constructor(private productServ : ProductsService , private router : ActivatedRoute) { 
    this.router.params.subscribe(idItem => {this.id = idItem['id']})
  }
  ngOnInit(): void {

    this.router.params.subscribe(idItem => {this.id = idItem['id']})
    this.productServ.getItemDetails(this.id.toString()).subscribe(data=>{
      this.product = data;
    })
    
  }

}
