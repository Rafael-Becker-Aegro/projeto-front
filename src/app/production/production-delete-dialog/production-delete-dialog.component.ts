import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-production-delete-dialog',
  templateUrl: './production-delete-dialog.component.html',
  styleUrls: ['./production-delete-dialog.component.css']
})
export class ProductionDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductionDeleteDialogComponent>) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
