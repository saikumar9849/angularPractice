import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesService } from './services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';
import { UppercaseConverterService } from './services/uppercase-converter.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    UppercaseConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountriesService,UppercaseConverterService],
  bootstrap: [UppercaseConverterComponent]
})
export class AppModule { }
