import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreinformationPageRoutingModule } from './moreinformation-routing.module';

import { MoreinformationPage } from './moreinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreinformationPageRoutingModule
  ],
  declarations: [MoreinformationPage]
})
export class MoreinformationPageModule {}
