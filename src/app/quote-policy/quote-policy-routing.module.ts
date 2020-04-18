import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotePolicyPage } from './quote-policy.page';

const routes: Routes = [
  {
    path: '',
    component: QuotePolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotePolicyPageRoutingModule {}
