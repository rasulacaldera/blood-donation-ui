import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private LOGIN_SERVICE: string = SERVER + '/login';

  private loggedInUser: any = undefined;

  constructor(private http: HttpClient) { }

  login(login: any) {
    // return this.http.post(this.LOGIN_SERVICE, login);
    return Observable.create((obs: any) => {
      this.loggedInUser = login;
      obs.next(this.loggedInUser);
    })
  }
}
