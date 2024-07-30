import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private _httpclient:HttpClient) { }

  public questionService(): any{
    return this._httpclient.get('http://localhost:8080/question/allQuestions');
  }
}
