import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MultipleServicesComponent } from './components/multiple-services/multiple-services.component';

import { HelloServiceService } from './services/hello-service.service';
import { QuestionServiceService } from './services/question-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MultipleServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HelloServiceService, QuestionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
