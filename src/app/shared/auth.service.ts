import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { User } from "./user.interface";

@Injectable()
export class AuthService {
  private user: User;

  constructor() { }

  register(registerData: User): Observable<any> {
    this.user = registerData;
    return new Observable(
      observer => {
        setTimeout(() => {
          observer.next(this.user.username);
        }, 2000);
      }
    );
  }

  getUsername() {
    return (this.user) ? this.user.username : null;
  }
}
