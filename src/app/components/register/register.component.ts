import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'hst-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: ['', Validators.required],
        login: ['', Validators.required],
        email: ['',[
          Validators.required,
          this.isEmail
        ]],
      }),
      passwords: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.minLength(4)
        ]],
        rpassword: ['', [
          Validators.required,
          this.isEqualPassword.bind(this)
        ]]
      })
    });
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.registerForm) {
      return {passwordsNotMatch: true};
    }
    if (control.value !== this.registerForm.controls['passwords']['controls']['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm);
  }

}
