import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Farm } from 'src/app/models/farm';
import { FarmsService } from 'src/app/services/farms.service';

import { FarmDialogComponent } from '../farm-dialog/farm-dialog.component';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css'],
  providers: [FarmsService],
})
export class FarmsComponent implements OnInit {
  farms$!: Observable<Farm[]>;
  displayedColumns = ['name', 'actions'];

  constructor(private farmsService: FarmsService, public dialog: MatDialog) {
    this.getAll();
  }

  ngOnInit(): void {}

  clickCreate(): void {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data: { name: '', id: '' },
    });

    dialogRef.afterClosed().subscribe((farm: Farm) => {
      if (farm != undefined) {
        this.farmsService.create(farm).subscribe(() => {
          this.getAll();
        });
      }
    });
  }

  clickUpdate(farm: Farm): void {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data: { name: farm.name, id: farm.id },
    });

    dialogRef.afterClosed().subscribe((farm: Farm) => {
      if (farm != undefined) {
        this.farmsService.update(farm).subscribe(() => {
          this.getAll();
        });
      }
    });
  }

  clickDelete(farmId: string) {
    this.farmsService.delete(farmId).subscribe(() => {
      this.getAll();
    });
  }

  getAll() {
    this.farms$ = this.farmsService.getAll()
  }
}
