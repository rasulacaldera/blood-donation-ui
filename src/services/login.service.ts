import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInUser: any = undefined

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
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

  register(registerUser: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(registerUser.Email, registerUser.Password)
      .then((result) => {
        this.setUserData(registerUser);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  setUserData(userData: any) {
    const hospitals = this.db.list('hospitals');
    hospitals.push({
      "Name": userData.Name,
      "Email": userData.Email,
      "City": userData.City
    });
  }

  isAdminLogin() {
    return sessionStorage.getItem('loggedInUser') === "admin@gmail.com";
  }

  isLoggedIn() {
    return sessionStorage.getItem('loggedInUser') ? true : false;
  }

}
