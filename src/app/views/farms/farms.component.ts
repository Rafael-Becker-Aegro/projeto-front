import { FarmsService } from './../services/farms.service';
import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/farm';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css'],
  providers: [FarmsService]
})
export class FarmsComponent implements OnInit {

  farms: Observable<Farm[]>;
  displayedColumns = ['id', 'name', 'area', 'productivity'];

  constructor(private farmsService:FarmsService) {
    this.farms = this.farmsService.getAll();
  }

  ngOnInit(): void {
  }
}
