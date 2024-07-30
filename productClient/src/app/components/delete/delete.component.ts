import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public deleteResponse: any;

  id3: any;

  constructor(private _productService: ProductDataService) { }

  ngOnInit(): void {
  }

  public deleteProduct(id: number): any {
    this._productService.delete(id).subscribe((res: any) => {
      this.deleteResponse = res;
    })
  }

}
