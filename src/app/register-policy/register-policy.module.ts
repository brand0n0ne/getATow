import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPolicyPageRoutingModule } from './register-policy-routing.module';

import { RegisterPolicyPage } from './register-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPolicyPageRoutingModule
  ],
  declarations: [RegisterPolicyPage]
})
export class RegisterPolicyPageModule {}
