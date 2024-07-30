import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateforms';
  public firstName:string="Jhon";
  public lastName!: string;
  public email!: string;
  public gender!: string;
  public street!: string;
  public city!: string;
  public country!: string;
  public onSubmit(data: any){
    console.log(data);
  }
}
