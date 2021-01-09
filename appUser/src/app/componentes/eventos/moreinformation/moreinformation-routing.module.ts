import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreinformationSubeventComponent } from '../moreinformation-subevent/moreinformation-subevent.component';
import { MoreinformationPage } from './moreinformation.page';

const routes: Routes = [
  {
    path: '',
    component: MoreinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreinformationPageRoutingModule {}
