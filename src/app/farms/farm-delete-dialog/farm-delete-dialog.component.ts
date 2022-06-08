import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-farm-delete-dialog',
  templateUrl: './farm-delete-dialog.component.html',
  styleUrls: ['./farm-delete-dialog.component.css']
})
export class FarmDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FarmDeleteDialogComponent>) {
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
