import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InterceptorProvider} from './api.interceptor';
import {ApiPasswordStrengthService} from './api.password-strength.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    InterceptorProvider,
    ApiPasswordStrengthService
  ],
  exports: [

  ]
})
export class ApiModule {

}
