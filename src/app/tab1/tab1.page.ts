import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  vehicleInformation: any;

  constructor() {}

  ngOnInit() {
    this.vehicleInformation = JSON.parse(localStorage.getItem('selectedVehicle'));
  }

}
