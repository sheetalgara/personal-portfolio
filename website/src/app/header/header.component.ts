import { Component, OnInit } from '@angular/core';
import {ContentService} from '../utils/services/content.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerContent: any;
  constructor(private contentService: ContentService, private router: Router) {
    this.contentService.$loadJson.subscribe((data) => {
      if (data) { this.setContent(); }
    });
  }

  ngOnInit(): void {
    this.headerContent = {};
  }

  private setContent() {
    this.headerContent = this.contentService.Content.header;
  }

  changeRoute(item) {
    this.headerContent.menu.forEach((menuItem) => {
      if (menuItem.name !== item.name) {
        menuItem.class = '';
      } else {
        menuItem.class = 'active';
      }
    });
    this.router.navigate([item.path]);
  }
}
