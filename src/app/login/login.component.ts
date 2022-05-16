import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.loginForm.value)
    this.afAuth.signInWithEmailAndPassword(this.loginForm.value.userName, this.loginForm.value.password).then(
      res => {
        console.log(res)
      }
    ).catch(err => {
      console.log(err)
    })
  }

}
