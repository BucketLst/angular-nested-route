import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportContainerComponent } from './report-container.component';
import { ReportViewComponent } from './report-view/report-view.component';
import { ContentOneComponent } from './report-view/sub-view/content-one/content-one.component';
import { ContentTwoComponent } from './report-view/sub-view/content-two/content-two.component';
import { ContentThreeComponent } from './report-view/sub-view/content-three/content-three.component';

const routes: Routes = [
  {
    path: 'report',
    component: ReportContainerComponent,
    children: [
      {
        path: 'view',
        component: ReportViewComponent,
        children: [
          { path: '', redirectTo: 'first', pathMatch: 'full' },
          { path: 'first', component: ContentOneComponent },
          { path: 'second', component: ContentTwoComponent },
          { path: 'third', component: ContentThreeComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'report', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
