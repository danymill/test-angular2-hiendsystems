import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { User } from "./user.interface";

@Injectable()
export class AuthService {
  public username: string;

  constructor() { }

  register(registerData: User): Observable<any> {
    let {username} = registerData;
    return new Observable(
      observer => {
        setTimeout(() => {
          this.username = username;
          observer.next(username);
        }, 3000);
      }
    );
  }
}
