import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SurveyFormComponent } from './surveyform/surveyform.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SurveyFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
