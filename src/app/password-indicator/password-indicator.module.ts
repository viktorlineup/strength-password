import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BarIndicatorComponent} from './bar-indicator/bar-indicator.component';
import {PasswordIndicatorComponent} from './password-indicator.component';
import {GetStrengthService} from './get-strength.service';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    PasswordIndicatorComponent,
    BarIndicatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    PasswordIndicatorComponent,
    BarIndicatorComponent
  ],
  providers: [
    GetStrengthService
  ]
})
export class PasswordIndicatorModule {

}
