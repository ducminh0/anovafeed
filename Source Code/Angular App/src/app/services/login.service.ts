import { Logger } from "angular2-logger/core";
import { Injectable } from '@angular/core';
import { ConfigService } from './Config.service';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor() { }

    checkLogin(loginData: any) {

    }

    parseToMd5(plainText): string {
        // do parse to md5
        var encrypted = "" + plainText;

        return encrypted;
    }
}