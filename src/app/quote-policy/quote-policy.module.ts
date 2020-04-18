import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotePolicyPageRoutingModule } from './quote-policy-routing.module';

import { QuotePolicyPage } from './quote-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotePolicyPageRoutingModule
  ],
  declarations: [QuotePolicyPage]
})
export class QuotePolicyPageModule {}
