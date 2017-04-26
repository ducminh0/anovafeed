import { Injectable } from '@angular/core';
import { ConfigService } from './Config.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, URLSearchParams, RequestOptions, Headers } from "@angular/http";
import {AppStorageService} from './AppStorage.service'
import * as Constant from '../consts/globals';


/**
 * Utility Service for handling stuffs
 * 
 * @export
 * @class UtilityService
 */
@Injectable()
export class UtilityService {
  static config: any;
  static http: Http;

  constructor(_http: Http, private _configService: ConfigService) {
    //console.log('ctor for ConfigService called.')  
    UtilityService.http = _http;
    _configService.configLoaded.subscribe((configLoaded) => {
      UtilityService.config = configLoaded;
    });

  }

  public static buildUrl(apiServer: string, apiPostFix: string) {

  }

  public static extractDomain(url: string) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
      domain = url.split('/')[2];
    }
    else {
      domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
  }
  public static getQueryStringValue(key: string) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

  public static extractExtension(url: string) {
    var re = /(?:\.([^.]+))?$/;
    var ext = re.exec(url)[1];
    return (ext != undefined) ? ext : null;
  }

  public static tryPush(checkedItems, node, property?) {
    var property = (property == null) ? 'DocId' : property;
    var el = checkedItems.filter(function (el) {
      return el[property] == node[property];
    });

    if (el.length) {
      el[0].IsChecked = node.checked;
    } else {
      checkedItems.push(node);
    }
  }
  public static EnumCompare(stringC, EnumC, EnumType) {
    return (EnumType[EnumC] == stringC || stringC == EnumType[stringC] || stringC == EnumC)
  }

  public static EnumParse(EnumType, stringE?, numberE?) {
    if ((stringE == numberE == null) || (stringE != null && numberE != null)) {
      return null;
    }
    else {
      if (numberE == null) {
        var m = Number([EnumType[stringE]]);
        return m;
      }
      else if (stringE == null) {
        return EnumType[numberE];
      }

    }
  }

  public static Distinct(things: Array<any>, propertyName: string) {
    var obj = {};
    for (var i = 0, len = things.length; i < len; i++)
      obj[things[i][propertyName]] = things[i];

    things = new Array();
    for (var key in obj)
      things.push(obj[key]);

    return things;
  }


  public static getData(getUrl: string, parameters: Object, resultF: Function, errorF: Function): Promise<any> {
    var urlApi = this.config.Configuration.apiUrl + getUrl;
    let params: URLSearchParams = new URLSearchParams();
    for (let propertyName in parameters) {
      params.set(propertyName, parameters[propertyName]);
    }
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    return this.http.get(urlApi, requestOptions).retry(4).map(res =>
      res.json()).toPromise().then(
      (result) => {
        resultF(result);
      }).catch(error => errorF(error));
  }

  public static postData(getUrl: string, parameters: Object, resultF: Function, errorF: Function): Promise<any> {
    var urlApi = this.config.Configuration.apiUrl + getUrl;
    /*let params: URLSearchParams = new URLSearchParams();
    for (let propertyName in parameters) {
      params.set(propertyName, parameters[propertyName]);
    }
    let requestOptions = new RequestOptions();
    requestOptions.search = params*/
    return this.http.post(urlApi, parameters).retry(4).map(res => res.json()).toPromise().then(
      (result) => {
        resultF(result);
      }).catch(
      error => errorF(error));
  }
}

