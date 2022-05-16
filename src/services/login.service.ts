import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInUser: any = undefined

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }

  login(username: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(username, password).then(
      res => {
        this.loggedInUser = res
        this.router.navigate(['/home']);
      }
    ).catch(err => {
      console.log(err)
    })
  }

  isAdminLogin() {
    return this.loggedInUser.user.multiFactor.user.email === "admin@gmail.com";
  }

}
