import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeteccionPage } from './deteccion.page';

const routes: Routes = [
  {
    path: '',
    component: DeteccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeteccionPageRoutingModule {}
