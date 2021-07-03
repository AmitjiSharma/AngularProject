import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public products = [];
  constructor(private _employee: DataService) {}

  ngOnInit() {
    this._employee
      .product()
      .subscribe(productData => (this.products = productData));
  }
}
