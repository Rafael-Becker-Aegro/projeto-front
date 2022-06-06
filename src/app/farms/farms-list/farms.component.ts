import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { Farm } from 'src/app/models/farm';

import { FarmDialogComponent } from '../farm-dialog/farm-dialog.component';
import { FarmsService } from '../services/farms.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css'],
  providers: [FarmsService]
})
export class FarmsComponent implements OnInit {

  farms$!: Observable<Farm[]>;
  displayedColumns = ['id', 'name', 'actions'];

  constructor(private farmsService:FarmsService, public dialog: MatDialog) {
    this.getAll();
  }

  ngOnInit(): void {
  }


  clickCreate(): void {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data: {name: '', id: ''},
    });

    dialogRef.afterClosed().subscribe(farm => {
      this.farmsService.create(farm).subscribe(() => {
        this.getAll()
      });
    });
  }

  clickUpdate(farm: Farm): void {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data: {name: farm.name, id: farm.id},
    });

    dialogRef.afterClosed().subscribe(farm => {
      this.farmsService.update(farm).subscribe(() => {
        this.getAll()
      });
    });
  }

  clickDelete(farmId: string){
    this.farmsService.delete(farmId + 'XXX').subscribe(() => {
      this.getAll()
    });
  }

  clickFarm(farmId: string){

  }

  getAll() {
    this.farms$ = this.farmsService.getAll()
    .pipe(
      catchError(error => {
        return of([])
      })
    )
  }
}
