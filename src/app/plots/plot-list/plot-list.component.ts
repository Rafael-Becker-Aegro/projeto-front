import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Farm } from 'src/app/models/farm';
import { Plot } from 'src/app/models/plot';
import { FarmsService } from 'src/app/services/farms.service';
import { PlotsService } from 'src/app/services/plots.service';
import { PlotDialogComponent } from '../plot-dialog/plot-dialog.component';

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
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    route.params.subscribe((paramFarm) => {
      this.farm = {
        name: paramFarm['name'],
        id: paramFarm['id'],
        productivity: 0,
      };
      this.farmService.getProductivity(this.farm.id).subscribe((farmProductivity) => {
        this.farm.productivity = farmProductivity;
        this.getAll();
      });
      this.getAll();
    });
  }

  ngOnInit() {}

  clickCreate(): void {
    const dialogRef = this.dialog.open(PlotDialogComponent, {
      width: '250px',
      data: { name: '', id: '' },
    });

    dialogRef.afterClosed().subscribe((plot: Plot) => {
      if (plot != undefined) {
        this.plotsService.create(this.farm.id, plot).subscribe(() => {
          this.getAll();
        });
      }
    });
  }

  clickUpdate(plot: Plot): void {
    const dialogRef = this.dialog.open(PlotDialogComponent, {
      width: '250px',
      data: { name: plot.name, id: plot.id, area: plot.area },
    });

    dialogRef.afterClosed().subscribe((plot: Plot) => {
      if (plot != undefined) {
        this.plotsService.update(this.farm.id, plot).subscribe(() => {
          this.getAll();
        });
      }
    });
  }

  clickDelete(plotId: string) {
    this.plotsService.delete(this.farm.id, plotId).subscribe(() => {
      this.getAll();
    });
  }

  getAll() {
    this.plots$ = this.plotsService.getAll(this.farm.id);
  }
}

PlotDialogComponent
