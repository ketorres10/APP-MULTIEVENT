import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
