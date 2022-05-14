import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = new FormControl('');
  password = new FormControl('');

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let login = {
      userName: this.userName.value,
      password: this.password.value
    }
    this.loginService.login(login).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/home'])
    })
  }

}
