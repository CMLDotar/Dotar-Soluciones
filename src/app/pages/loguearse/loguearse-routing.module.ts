import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoguearsePage } from './loguearse.page';

const routes: Routes = [
  {
    path: '',
    component: LoguearsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoguearsePageRoutingModule {}
