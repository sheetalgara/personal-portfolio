import { Component, OnInit } from '@angular/core';
import {ContentService} from '../utils/services/content.service';
import {disappear, slideDown, slideLeft} from '../utils/constants/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [disappear, slideLeft, slideDown]
})
export class HomeComponent implements OnInit {
  hContent: any;
  wallpaper: any;
  showWallpaper = false;
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
    this.hContent = this.contentService.Content.home;
    this.runWallpaper();
  }


  private setWallpaper(num) {
    setTimeout(() => {
      this.wallpaper = this.hContent.wallpapers[num];
      this.showWallpaper = true;
    }, 1500);
  }


  private runWallpaper() {
    this.wallpaper = this.hContent.wallpapers[0];
    this.showWallpaper = true;
    let i = 1;
    setInterval(() => {
      this.setWallpaper( i % 3);
      i++;
      this.showWallpaper = false;
    }, 2750);
  }
}
