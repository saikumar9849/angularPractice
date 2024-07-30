import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public updateResponse: any;

  id1: any;
  name1: any;
  price1: any;

  constructor(private _productService: ProductDataService) { }

  ngOnInit(): void {
  }

  public updateProduct(product: any): any {
    this._productService.update(product).subscribe((res: any) => {
      this.updateResponse = res;
    })
  }

}
