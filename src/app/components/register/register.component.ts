import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../shared/auth.service";

@Component({
  selector: 'hst-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private submitted: boolean = false;
  private loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private as: AuthService, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      login: ['', Validators.required],
      email: ['',[
        Validators.required,
        this.isEmail
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      rpassword: ['', [
        Validators.required,
        this.isEqualPassword.bind(this)
      ]]
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
    if (control.value !== this.registerForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.loading = true;
      this.as.register(this.registerForm.value).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/register-success']);
      });
    }
  }

}
