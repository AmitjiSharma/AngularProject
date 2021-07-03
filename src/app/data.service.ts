import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public _url = '/test/api.json';
  product(): Observable<any> {
    return this.http.get(this._url);
  }
}
