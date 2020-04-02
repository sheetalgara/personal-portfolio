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
  path = '';
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
    const currentPath = this.router.url.substring(1);
    if (currentPath && currentPath !== this.path) {
      this.path = currentPath;
      this.selectMenu(currentPath);
      this.router.navigate([currentPath]);
    }
  }

  changeRoute(item) {
    this.selectMenu(item.path);
    this.router.navigate([item.path]);
  }

  selectMenu(path) {
    this.headerContent.menu.forEach((menuItem) => {
      if (menuItem.path !== path) {
        menuItem.class = '';
      } else {
        menuItem.class = 'active';
      }
    });
  }
}
