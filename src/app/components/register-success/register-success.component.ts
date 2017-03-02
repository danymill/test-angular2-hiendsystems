import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../shared/auth.service";

@Component({
  selector: 'hst-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {
  private username: string;

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit() {
    this.username = this.as.getUsername();
  }

  onClick() {
    this.router.navigate(['/']);
  }
}
