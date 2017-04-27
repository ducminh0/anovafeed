import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';

import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    canActivate() {
        let status = this.loginService.getLoginStatus();
        if (!status) {
            alert("You don't have permission on this page");
            this.router.navigate(['/']);
        }
        return status;
    }

    constructor(private loginService: LoginService, private router: Router) { }
}