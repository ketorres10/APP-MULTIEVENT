import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSubeventPage } from './detail-subevent.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSubeventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSubeventPageRoutingModule {}
