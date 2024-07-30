import { Component } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productClient';
  public products: any;

  constructor(private _productService: ProductDataService){}

  ngOnInit(){
    this._productService.getProducts().subscribe((res: any) =>{
      this.products = res;
    })
  }

}
