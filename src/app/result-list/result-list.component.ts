import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  isShow: boolean;
  @Input() set restaurantList(value:Restaurant[]) {
    this.dataSource = value;
    this.isShow=true;
  };
  dataSource:Restaurant[];
  displayedColumns=['name', 'address', 'phoneNumber', 'distance']
  constructor() { }

  ngOnInit() {
    this.isShow=false;
    this.dataSource=[];
  }

}
