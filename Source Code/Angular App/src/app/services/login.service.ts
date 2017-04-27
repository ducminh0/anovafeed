import { Logger } from "angular2-logger/core";
import { Injectable } from '@angular/core';
import { ConfigService } from './Config.service';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    private _loginStatus: boolean;
    constructor(private http: Http) { }

    checkLogin(loginData: any) {
        return this.http.get("http://59015dd9df801b00113c4d74.mockapi.io/login/logindata/1").map(res => res.json());
    }

    getLoginStatus(): boolean {
        return this._loginStatus;
    }

    setLoginStatus(status: boolean) {
        this._loginStatus = status;
    }

}