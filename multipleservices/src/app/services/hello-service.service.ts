import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private _httClient:HttpClient) { }

  public helloService():any {
    return this._httClient.get('http://localhost:8080/quiz/hello');
  }
}
