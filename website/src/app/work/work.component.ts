import { Component, OnInit } from '@angular/core';
import {ContentService} from "../utils/services/content.service";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  wContent: any;

  constructor(private contentService: ContentService) {
    this.contentService.$loadJson.subscribe((data) => {
      if (data){ this.setContent()}
    });
  }

  ngOnInit(): void {
    if(typeof this.contentService.Content != "undefined"){
      this.setContent();
    }
  }

  private setContent() {
    this.wContent = this.contentService.Content.work;
  }

}
