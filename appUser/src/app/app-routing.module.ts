import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./shared/guards/auth.guard";
import { NologinGuard } from "./shared/guards/nologin.guard"
import { MoreinformationPage } from './componentes/eventos/moreinformation/moreinformation.page';
import { RegistroPage } from './componentes/registro/registro.page';
import { AuthService } from './shared/servicios/auth.service';
import { from } from 'rxjs';
import { DetailSubeventPage } from './componentes/eventos/detail-subevent/detail-subevent.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  { path: 'login',loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule),canActivate: [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule), canActivate: [NologinGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./componentes/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'event/:id', component:MoreinformationPage
  },
  { 
    path: 'subevent/:id', component:DetailSubeventPage
  },
  {
    path: 'agenda',
    loadChildren: () => import('./componentes/agenda/agenda.module').then( m => m.AgendaPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'deteccion',
    loadChildren: () => import('./componentes/deteccion/deteccion.module').then( m => m.DeteccionPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
