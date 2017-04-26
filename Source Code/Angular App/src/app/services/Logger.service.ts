import { Logger } from "angular2-logger/core";
import { Injectable } from '@angular/core';
import { ConfigService } from './Config.service';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Wrapper class for logging using angular2-logger
 * 
 * @export
 * @class LoggerService
 */
@Injectable()
export class LoggerService {
  private _logger: Logger;
  enable: boolean = true;


  constructor(private _configService: ConfigService) {
    this._logger = new Logger();
    this._logger.level = 5; /*
    this._logger.error('This is a priority level 1 error message...');
 		this._logger.warn('This is a priority level 2 warning message...');
 		this._logger.info('This is a priority level 3 warning message...');
 		this._logger.debug('This is a priority level 4 debug message...');
 		this._logger.log('This is a priority level 5 log message...');*/
    // this.enable = _configService.config.enableLog;
  }

  error = (message: string) => {
    if (this.enable) this._logger.error(message);
  }

  warn = (message: string) => {
    if (this.enable) this._logger.warn(message);
  }

  info = (message: string) => {
    if (this.enable) this._logger.info(message);
  }

  debug = (message: string) => {
    if (this.enable) this._logger.debug(message);
  }

  log = (message: string) => {
    if (this.enable) this._logger.log(message);
  }

}