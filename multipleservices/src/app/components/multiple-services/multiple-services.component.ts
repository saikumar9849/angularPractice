import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from 'src/app/services/hello-service.service';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.css']
})
export class MultipleServicesComponent implements OnInit {

  public helloResponse:any;
  public questionResponse: any;

  constructor(private _helloService:HelloServiceService, private _questionService: QuestionServiceService) { }

  //normal way of calling(squence calling)
  // ngOnInit() {
  //   this._helloService.helloService().subscribe(res=>this.helloResponse=res);
  //   this._questionService.questionService().subscribe(res=>this.questionResponse=res);
  // }

  ngOnInit(): void {
      forkJoin([this._helloService.helloService(),this._questionService.questionService()])
      .subscribe(response=>{
        this.helloResponse = response[0];
        this.questionResponse = response[1];
      })
  }

}
