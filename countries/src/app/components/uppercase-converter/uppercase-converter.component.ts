import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UppercaseConverterService } from 'src/app/services/uppercase-converter.service';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})
export class UppercaseConverterComponent implements OnInit {
  public result: any;
  public my_message: any;

  constructor(private _uppercaseService: UppercaseConverterService) { }

  ngOnInit(): void {
  }

  public convert(obj: any):any {
    return this._uppercaseService.convertToUppercase(obj).subscribe((response: any)=>{
      this.result = response;
    },
    (err:HttpErrorResponse)=>{
      console.log(err);
    });
  }

}
