import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/farm';

@Component({
  selector: 'app-farm-dialog',
  templateUrl: './farm-dialog.component.html',
  styleUrls: ['./farm-dialog.component.css']
})
export class FarmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FarmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Farm,
  ) {}

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
