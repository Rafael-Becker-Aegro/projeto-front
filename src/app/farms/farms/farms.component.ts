import { FarmsService } from '../services/farms.service';
import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/farm';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FarmDialogComponent } from '../farm-dialog/farm-dialog.component';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css'],
  providers: [FarmsService]
})
export class FarmsComponent implements OnInit {

  farms: Observable<Farm[]>;
  displayedColumns = ['id', 'name', 'actions'];

  constructor(private farmsService:FarmsService, public dialog: MatDialog) {
    this.farms = this.farmsService.getAll();
  }

  ngOnInit(): void {
  }


  cickCreate(): void {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data: {name: '', id: ''},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

  clickUpdate(): void {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data: {name: '', id: ''},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }
}
