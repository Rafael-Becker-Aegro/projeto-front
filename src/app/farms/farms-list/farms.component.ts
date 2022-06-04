import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
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
  @ViewChild(MatTable)
  farmList!: MatTable<any>;
  farms: Observable<Farm[]>;
  displayedColumns = ['id', 'name', 'actions'];

  constructor(private farmsService:FarmsService, public dialog: MatDialog) {
    this.farms = this.farmsService.getAll();
  }

  ngOnInit(): void {
  }


  clickCreate(): void {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data: {name: '', id: ''},
    });

    dialogRef.afterClosed().subscribe(farm => {
      this.farmsService.create(farm).subscribe(result => console.log(result));
    });
  }

  clickUpdate(farm: Farm): void {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data: {name: farm.name, id: farm.id},
    });

    dialogRef.afterClosed().subscribe(farm => {
      this.farmsService.update(farm).subscribe(result => console.log(result));
    });
  }

  clickDelete(farmId: string){
    this.farmsService.delete(farmId).subscribe(result => console.log(result));
    this.farmList.renderRows();
  }

  clickFarm(farmId: string){

  }
}
