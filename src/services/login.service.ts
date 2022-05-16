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
        sessionStorage.setItem('loggedInUser', this.loggedInUser.user.multiFactor.user.email);
        this.router.navigate(['/home']);
      }
    ).catch(err => {
      console.log(err)
    })
  }

  logout() {
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        // this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  isAdminLogin() {
    return sessionStorage.getItem('loggedInUser') === "admin@gmail.com";
  }

  isLoggedIn() {
    return sessionStorage.getItem('loggedInUser') ? true : false;
  }

}
