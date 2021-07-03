import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IEmployee } from './employee';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public _url = '/test/api.json';

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
