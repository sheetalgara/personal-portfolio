import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {APIPaths} from "../constants/ApiPaths";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  Content: any;
  $loadJson: Subject<boolean>;
  constructor(private apiService: ApiService) {
    this.$loadJson = new Subject<boolean>();
    this.init()
  }

  init() {
    this.apiService.get(APIPaths.contenURL).subscribe((data)=>{
      this.Content = data;
      this.$loadJson.next(true);
    })
  }
}
