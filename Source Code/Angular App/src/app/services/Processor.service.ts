import { Injectable } from '@angular/core'
import { Http, URLSearchParams, RequestOptions } from "@angular/http"
import { ConfigService } from './Config.service'
import { LoggerService } from './Logger.service'
import { UtilityService } from './Utility.service'
import * as Constant from '../consts/globals'
import {Observable, Subject} from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {InputBase, OutputBase} from '../models/InputModel.model'
/**
 * The processor service to process Input and emit data for component to display output
 * Should be injected to any component
 * @export
 * @class AppStorageService
 */
@Injectable()
export class ProcessorService {

        constructor() {           
        }

        handleInput(input:InputBase):OutputBase
        {
            let result = input.process(); // call the input to process itself
            return result;
        }
}