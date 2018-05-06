import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetStrengthService {
  constructor(private http: HttpClient) {}
  strength(password: string) {
    return this.http.post('/', password);
  }
}
