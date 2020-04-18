import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceListPage } from '../insurance-list/insurance-list.page';

@Component({
  selector: 'app-quote-policy',
  templateUrl: './quote-policy.page.html',
  styleUrls: ['./quote-policy.page.scss'],
})
export class QuotePolicyPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/insurance-list');
  }


}
