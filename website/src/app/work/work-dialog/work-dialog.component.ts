import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-work-dialog',
  templateUrl: './work-dialog.component.html',
  styleUrls: ['./work-dialog.component.scss']
})
export class WorkDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<WorkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
