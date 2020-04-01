import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ApiService} from './utils/services/api.service';
import {ContentService} from './utils/services/content.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutes} from './app.routes';
import {MatGridList, MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { WorkComponent } from './work/work.component';
import { VerticalTimelineComponent } from './work/vertical-timeline/vertical-timeline.component';
import { WorkDialogComponent } from './work/work-dialog/work-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    WorkComponent,
    VerticalTimelineComponent,
    WorkDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutes,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatListModule
  ],
  providers: [ApiService, ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
