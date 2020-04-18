import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPolicyPage } from './register-policy.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPolicyPageRoutingModule {}
