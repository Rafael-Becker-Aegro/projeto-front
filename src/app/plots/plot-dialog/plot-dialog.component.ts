import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Plot } from 'src/app/models/plot';

@Component({
  selector: 'app-plot-dialog',
  templateUrl: './plot-dialog.component.html',
  styleUrls: ['./plot-dialog.component.css'],
})
export class PlotDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PlotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Plot
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
