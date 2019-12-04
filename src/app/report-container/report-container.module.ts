import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatTabsModule,
  MatTabLink,
  MatTabNav
} from '@angular/material';

import { ReportSearchControlComponent } from './report-search-control/report-search-control.component';
import { ReportViewComponent } from './report-view/report-view.component';
import { ReportContainerComponent } from './report-container.component';
import { ContentOneComponent } from './report-view/sub-view/content-one/content-one.component';
import { ContentTwoComponent } from './report-view/sub-view/content-two/content-two.component';
import { ContentThreeComponent } from './report-view/sub-view/content-three/content-three.component';

@NgModule({
  declarations: [
    ReportSearchControlComponent,
    ReportViewComponent,
    ReportContainerComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [MatTabLink, MatTabNav],
  exports: [
    ReportSearchControlComponent,
    ReportViewComponent,
    ReportContainerComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent
  ],
  entryComponents: [ReportContainerComponent]
})
export class ReportContainerModule {}
