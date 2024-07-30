import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  url:string = 'http://localhost:8091/API/products/';

  constructor(private _httpClient: HttpClient) { }

  public getProducts(): any {
    return this._httpClient.get(this.url);
  }

  public create(product: any): any {
    return this._httpClient.post(this.url,product);
  }

  public update(product: any): any {
    return this._httpClient.put(this.url,product);
  }

  public delete(id:number): any {
    return this._httpClient.delete(this.url+id);
  }

  public getProduct(id:number): any {
    return this._httpClient.get(this.url+id);
  }
}
