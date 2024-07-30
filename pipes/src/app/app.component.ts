import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bHarat';
  myDate: Date = new Date();
  myMoney: number = 1200;
  myObj: Object = { id:1, name:"Jhon"};
  myNumber: number = 1000.12345;
  stock: number = 3.5666;
  numbers: number[] = [10,20,30,40,50];

  myPromise: Promise<any>;
  constructor(){
    this.myPromise = this.getPromise();
  }
  getPromise(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve("promise Response"),5000);
    });
  }
}
