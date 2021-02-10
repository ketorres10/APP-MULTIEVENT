import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailSubeventPageRoutingModule } from './detail-subevent-routing.module';
import { DetailSubeventPage } from './detail-subevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSubeventPageRoutingModule
  ],
  declarations: [DetailSubeventPage]
})
export class DetailSubeventPageModule {}
