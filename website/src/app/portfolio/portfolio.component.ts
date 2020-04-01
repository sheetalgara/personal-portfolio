import { Component, OnInit } from '@angular/core';
import {ContentService} from '../utils/services/content.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  pContent: any;

  constructor(private contentService: ContentService) {
    this.contentService.$loadJson.subscribe((data) => {
      if (data) { this.setContent(); }
    });
  }

  ngOnInit(): void {
    if (typeof this.contentService.Content !== 'undefined') {
      this.setContent();
    }
  }

  private setContent() {
    this.pContent = this.contentService.Content.portfolio;
  }
}
