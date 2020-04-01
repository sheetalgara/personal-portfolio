import {Component, Input, OnInit} from '@angular/core';
import {RIGHT_ARROW} from '@angular/cdk/keycodes';
import {MatDialog} from '@angular/material/dialog';
import {WorkDialogComponent} from '../work-dialog/work-dialog.component';

export enum Alignment {
  Left,
  Right,
  Alternate
}

@Component({
  selector: 'vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent implements OnInit {
  @Input() rows = 1;
  @Input() alignment = Alignment.Alternate;
  @Input() data = [];
  allAlignments = Alignment;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    switch (this.alignment) {
      case Alignment.Left:
      case Alignment.Right:
        this.data.forEach(item => item.direction = this.alignment);
        break;
      default:
        this.data.forEach((item, index) => {
          if (index % 2 === 0) {
            item.direction = Alignment.Left;
          } else {
            item.direction = Alignment.Right;
          }
        });
        break;
    }
  }

  openDialog(item: any) {
      let currentDialogRef = this.dialog.open(WorkDialogComponent,
        {
          data: item
        });

      currentDialogRef.afterClosed().subscribe(result => {
        currentDialogRef = null;
      });
  }
}
