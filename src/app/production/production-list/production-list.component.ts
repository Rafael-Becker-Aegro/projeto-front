import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Plot } from 'src/app/models/plot';
import { Production } from 'src/app/models/production';
import { PlotsService } from 'src/app/services/plots.service';
import { ProductionService } from 'src/app/services/production.service';
import { ProductionDeleteDialogComponent } from '../production-delete-dialog/production-delete-dialog.component';

import { ProductionDialogComponent } from '../production-dialog/production-dialog.component';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css'],
})
export class ProductionListComponent implements OnInit {
  plot!: Plot;
  productions$!: Observable<Production[]>;
  displayedColumns = ['name', 'actions'];

  constructor(
    private plotsService: PlotsService,
    private productionService: ProductionService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _location: Location
  ) {
    route.params.subscribe((paramFarm) => {
      this.plot = {
        name: paramFarm['name'],
        id: paramFarm['id'],
        area: paramFarm['area'],
        farm: paramFarm['farm'],
        productivity: 0,
      };
      this.plotsService
        .getProductivity(this.plot.farm, this.plot.id)
        .subscribe((plotProductivity) => {
          this.plot.productivity = plotProductivity;
          this.getAll();
        });
    });
  }

  ngOnInit(): void {}

  clickCreate(): void {
    const dialogRef = this.dialog.open(ProductionDialogComponent, {
      width: '250px',
      data: { crop: '', id: '', quantity: '' },
    });

    dialogRef.afterClosed().subscribe((production: Production) => {
      if (production != undefined) {
        this.productionService.create(this.plot, production).subscribe(() => {
          this.getAll();
        });
      }
    });
  }

  clickUpdate(production: Production): void {
    const dialogRef = this.dialog.open(ProductionDialogComponent, {
      width: '250px',
      data: { crop: production.crop, id: production.id, quantity: production.quantity },
    });

    dialogRef.afterClosed().subscribe((production: Production) => {
      if (production != undefined) {
        this.productionService.update(this.plot, production).subscribe(() => {
          this.getAll();
        });
      }
    });
  }

  clickDelete(productionId: string) {
    const dialogRef = this.dialog.open(ProductionDeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((deleteReturn: string) => {
      if (deleteReturn != undefined) {
        this.productionService.delete(this.plot, productionId).subscribe(() => {
          this.getAll();
        });
      }
    });

  }

  getAll() {
    this.productions$ = this.productionService.getAll(this.plot);
  }

  backClicked() {
    this._location.back();
  }
}
