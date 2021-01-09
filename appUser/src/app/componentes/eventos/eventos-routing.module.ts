import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosPage } from './eventos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosPage
  },
  {
    path: 'moreinformation',
    loadChildren: () => import('./moreinformation/moreinformation.module').then( m => m.MoreinformationPageModule)
  },
  {
    path: 'detail-subevent',
    loadChildren: () => import('./detail-subevent/detail-subevent.module').then( m => m.DetailSubeventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosPageRoutingModule {}
