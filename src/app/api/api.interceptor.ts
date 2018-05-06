import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ApiPasswordStrengthService} from './api.password-strength.service';
import {Injectable} from '@angular/core';

@Injectable ()
export class ApiInterceptor implements HttpInterceptor {
  constructor (private strengthService: ApiPasswordStrengthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return Observable.of(new HttpResponse({ status: 200 , body: this.strengthService.getStrength(request.body)}));
  }
}

export const InterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
}
