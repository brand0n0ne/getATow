import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-register-policy',
  templateUrl: './register-policy.page.html',
  styleUrls: ['./register-policy.page.scss'],
})
export class RegisterPolicyPage implements OnInit {

  public registerForm: FormGroup;

  currentUser: any;

  // tslint:disable-next-line:max-line-length
  constructor(public navCtrl: NavController, public alertController: AlertController, private fb: FormBuilder, public loadingController: LoadingController) {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      policy: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro',
      subHeader: 'Error',
      message: 'La poliza no existe o ya se encuentra registrado',
      buttons: ['OK']
    });

    await alert.present();
  }


  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Registro',
      subHeader: 'Error',
      message: 'Se requiere toda la informacion',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Buscando informacion',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.goBack()
  }

  goBack() {
    this.navCtrl.navigateBack('/insurance-list');
  }

  submitRegister() {
    if (this.registerForm.valid) {
        if (this.currentUser.policies.some(car => car.policyNumber === this.registerForm.value.policy)) {
          this.presentAlert();
      } else {
        this.currentUser.policies.push({
            brand: 'Ford',
            car: 'Figo',
            type: 'Sedan',
            version: 'RS',
            color: 'White',
            VinNum: '1G1YY24R6957009991',
            insuredName: this.registerForm.value.name,
            phoneNumber: this.registerForm.value.phoneNumber,
            goodThrough: 'Jun 2016 - Jun 2020',
            inssuranceType: 'Cobertura Amplia',
            policyNumber: this.registerForm.value.policy
        });
        localStorage.setItem('user', JSON.stringify(this.currentUser));
        this.presentLoading();
      }
    } else {
      this.presentAlert2();
    }
  }

}
