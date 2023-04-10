import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServeService } from 'src/app/services/serve.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _serveService: ServeService) {
    console.log("const called")
    this._serveService.cred.subscribe(cred => {
      console.log("resiter component setting the values")
      this.registerForm.setValue({
        email: cred.value['user'],
        psw: cred.value['password'],
        pswrepeat: cred.value['Re-password']
      })
      console.log(this.registerForm)
    })
  }

  title = "Registration";
  onRegClicked() {
    const services = new ServeService();
    services.onClicked(this.title);
  }

  registerForm = new FormGroup({  // control form
    email: new FormControl('', [Validators.required]), // control field
    psw: new FormControl('', [Validators.required, Validators.minLength(8)]),
    pswrepeat: new FormControl('', [Validators.required])
  })
  regUser() {
    console.warn(this.registerForm.value);
  }
  get email() {
    return this.registerForm.get('email');
  }
  get psw() {
    return this.registerForm.get('psw');
  } get pswrepeat() {
    return this.registerForm.get('pswrepeat');
  }
}
