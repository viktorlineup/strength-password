import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PasswordIndicatorModule} from './password-indicator/password-indicator.module';
import {ApiModule} from './api/api.module';
import {AppRoutingModule} from './app.routing.module';
import {DocumentationModule} from './documentation/documentation.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    AppRoutingModule,
    PasswordIndicatorModule,
    DocumentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
