import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // id:number;
  // name: string;
  // price: number;
  // constructor() {
  //   this.id =1;
  //   this.name="Mac book pro";
  //   this.price = 1300;
  //  }

  //  getId(): number {
  //   return this.id;
  //  }

  //  getName(): string {
  //   return this.name;
  //  }

  //  getPrice(): number {
  //   return this.price;
  //  }p

  products:any;
  constructor() {
    this.products = [
      {
        id:"1",
        name:"apple"
      },
      {
        id:"2",
        name:"facebook"
      }
    ];
  }

  public getProducts():any {
    return this.products;
  }

  ngOnInit(): void {
  }

}
