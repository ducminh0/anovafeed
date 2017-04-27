import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public sub: Subscription;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }
  checkLogin(data) {
    //{"username":"username 1","password":"password 1"}
    this.sub = this.loginService.checkLogin(data).subscribe(res => {
      var username = res.username;
      var password = this.parseToMd5(res.password);
      if (data.username == username && data.password == password) {
        this.loginService.setLoginStatus(true);
        this.router.navigate(['./home']);
      }
    });
  }

  parseToMd5(plainText): string {
    // do parse to md5
    var encrypted = "" + plainText;

    return encrypted;
  }

  ngOnDestroy() {
    if (this.sub) { this.sub.unsubscribe(); }

  }
}
