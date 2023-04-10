import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServeService } from 'src/app/services/serve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  opened = true; 
  constructor (private _serveService:ServeService){
    this._serveService.cred.subscribe(cred =>{
      console.log("setting value we got from the service")
    
      console.log(cred)
      this.loginForm.setValue({
        user: cred.value['user'],
        password: cred.value['password']
      })
    })
  }

  title = "Login";

  onLogClicked() {
    const services = new ServeService();
    services.onClicked(this.title);
  }

  loginForm = new FormGroup({  // control form
    user: new FormControl('',[Validators.required,Validators.email]), // control field
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
  loginUser() {
    console.warn(this.loginForm.value);
    console.log("login clicked")

    this._serveService.cred.next(this.loginForm)

  }

  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }
  
}