import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  public productResponse: any;

  id2: any;

  constructor(private _productService: ProductDataService) { }

  ngOnInit(): void {
  }

  public getProduct(id:number): any {
    this._productService.getProduct(id).subscribe((res: any) => {
      this.productResponse = res;
    })
  }
}
