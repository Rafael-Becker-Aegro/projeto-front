import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/farm';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {
  farms: Farm[] = [];
  displayedColumns = ['name', 'area', 'productivity'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
