import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-plot-delete-dialog',
  templateUrl: './plot-delete-dialog.component.html',
  styleUrls: ['./plot-delete-dialog.component.css']
})
export class PlotDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlotDeleteDialogComponent>) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
