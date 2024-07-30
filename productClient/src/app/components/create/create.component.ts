import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public createResponse: any;

  id: any;
  name: any;
  description: any;
  price: any;

  constructor(private _productService: ProductDataService) { }

  ngOnInit(): void {
  }

  public createProduct(product: any): any {
    this._productService.create(product).subscribe((res: any) => {
      this.createResponse = res;
    })
  }

}
