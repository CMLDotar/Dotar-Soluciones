import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoguearsePageRoutingModule } from './loguearse-routing.module';

import { LoguearsePage } from './loguearse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoguearsePageRoutingModule
  ],
  declarations: [LoguearsePage]
})
export class LoguearsePageModule {}
