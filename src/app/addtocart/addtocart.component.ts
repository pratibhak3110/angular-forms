import { Component, OnInit } from '@angular/core';
import { Cart } from "./cart";

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  selectedcart:string="food";
  pname;
  price;
  cartarr: Cart[]=[
    
  ];


  constructor() {

  }

  ngOnInit(): void {

  }

  onMyCart(cartarr)
  {
      console.log(cartarr);
      this.cartarr.push(new Cart(this.pname,this.price));

  }


}
