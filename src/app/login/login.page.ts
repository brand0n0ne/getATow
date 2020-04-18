import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AllServices } from '../../services/allServices';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import users from '../../services/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title = 'json-file-read-angular';
  public userList: {name: string, email: string, password: string}[] = users;

  public loginform: FormGroup;

  constructor(public alertController: AlertController, private fb: FormBuilder, public allServices: AllServices, public router: Router) {
    this.loginform = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login',
      subHeader: 'Error',
      message: 'Usuario o Contraseña invalido',
      buttons: ['OK']
    });

    await alert.present();
  }

  submitLogin() {
    if (this.loginform.valid) {
        let user: any;
        user = this.allServices.getLogIn();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < user.users.length; i++) {
          if (user.users[i].email === this.loginform.value.email && user.users[i].password === this.loginform.value.password) {
              // console.log(data.users[i]);
              localStorage.setItem('user', JSON.stringify(user.users[i]));
              this.router.navigate(['/insurance-list']);
          }
      }
    } else {
      this.presentAlert();
    }
  }

}
