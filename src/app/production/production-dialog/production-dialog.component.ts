import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Production } from 'src/app/models/production';

@Component({
  selector: 'app-production-dialog',
  templateUrl: './production-dialog.component.html',
  styleUrls: ['./production-dialog.component.css'],
})
export class ProductionDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Production
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
