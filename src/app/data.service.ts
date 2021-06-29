import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() {}

  getEmployees(): any {
    return [{ name: 'Amit' }, { name: 'Shivam' }, { name: 'Rahul' }];
  }
}
