import { first } from 'rxjs/operators';
import { Plot } from './../../models/plot';
import { FarmsService } from 'src/app/services/farms.service';
import { Farm } from 'src/app/models/farm';
import { PlotsService } from 'src/app/services/plots.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.component.html',
  styleUrls: ['./plot-list.component.css'],
})
export class PlotListComponent implements OnInit {
  farm!: Farm;
  plots$!: Observable<Plot[]>;
  displayedColumns = ['name', 'actions'];

  constructor(
    private plotsService: PlotsService,
    private farmService: FarmsService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((paramFarm) => {
      this.farm = {
        name: paramFarm['name'],
        id: paramFarm['id'],
        productivity: 0,
      };
      this.farmService.getProductivity(this.farm.id).subscribe((val) => {
        this.farm.productivity = val;
        this.getAll();
      });
      this.getAll();
    });
    // this.farm = {'name': this.route.snapshot.params['name'], 'id': this.route.snapshot.params['id'], productivity: 0};
    // this.farmService.getProductivity(this.farm.id).subscribe(val => {
    //   this.farm.productivity = val;
    //   this.getAll();
    // });
    // this.getAll();
  }

  ngOnInit() {}

  clickCreate(): void {}

  clickUpdate(): void {}

  clickDelete() {}

  getAll() {
    this.plots$ = this.plotsService.getAll(this.farm.id);
  }
}
