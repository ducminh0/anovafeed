import { Injectable } from '@angular/core'
import { Http, URLSearchParams, RequestOptions } from "@angular/http"
import { ConfigService } from './Config.service'
import { LoggerService } from './Logger.service'
import { UtilityService } from './Utility.service'
import { SelecDocumentData, SelecParticipantData, SummaryData, SelectRouteData } from '../models/DataPages.model'
import * as Constant from '../consts/globals'
import {Observable, Subject} from 'rxjs'
import {TestData} from '../models/TestData.models'
import {UrlSource} from '../models/Wizard.model'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
/**
 * The global service holding data for all 4 pages and variables through out the app
 * Should be injected to any component
 * @export
 * @class AppStorageService
 */
@Injectable()
export class AppStorageService {
        //testdata
        constructor(private http: Http, private _configService: ConfigService, private _logger: LoggerService, private _utility: UtilityService) {
            
        }

        //function to init localStorage from the server
        init() {
           
             }

        }