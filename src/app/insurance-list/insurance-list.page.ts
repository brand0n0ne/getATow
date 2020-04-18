import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RegisterPolicyPage } from '../register-policy/register-policy.page';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.page.html',
  styleUrls: ['./insurance-list.page.scss'],
})
export class InsuranceListPage implements OnInit {

  listOfVehicles: any;

  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.listOfVehicles = JSON.parse(localStorage.getItem('user'));
  }

  quotePolicy() {
    this.navCtrl.navigateForward('/quote-policy');
  }

  addPolicy() {
    this.navCtrl.navigateForward('/register-policy');
  }

  goToPolicy(vehicle) {
    localStorage.setItem('selectedVehicle', JSON.stringify(vehicle));
    this.navCtrl.navigateForward('/Dashboard');
  }

}
