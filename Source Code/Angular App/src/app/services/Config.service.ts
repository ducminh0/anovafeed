import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as Constant from '../consts/globals'
import {Subject} from 'rxjs'
/**
 * The service to hold configuration for the application
 * 
 * @export
 * @class ConfigService
 */
@Injectable()
export class ConfigService {
  public config: any;
  public configLoaded: Subject<any> = new Subject<any>();
  constructor(private http: Http) {
    //console.log('ctor for ConfigService called.')
  }

  load() {
    //console.log('Inside Load');
    var urlConfigFile = Constant.CONFIG_FILE_PATH; //TODO: url to configuration file, should be mapped to sharepoint before bundling and deploy
     return this.http.get(urlConfigFile).toPromise().then(configs => {
        var parser = require('parser-xml');
          parser.parse(configs.text(), '', function(err, res) {
            if (err) { throw err; }
            this.config = res;
            this.configLoaded.next(this.config);
            console.log('Configuration loaded...........');
          }.bind(this));
        }).catch(err => {
            console.log('Configuration failed to load...........');
        });
  }

}