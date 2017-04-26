import { Component } from '@angular/core';
import { ConfigService } from './services/Config.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Deserialize, deserializeAs } from 'cerialize';
import {Subscription} from 'rxjs';
import {style, state, animate, transition, trigger} from '@angular/core';
import * as WizardModel from './models/Wizard.model' 
import { AppStorageService } from './services/AppStorage.service'
import {LoggerService} from './services/Logger.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(500, style({opacity:1})) 
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(500, style({opacity:0})) 
    ])
  ])]
})
export class AppComponent {

  

 constructor(private _appStorageService: AppStorageService,  http: Http) { 
 }

  ngOnInit(){
  }

}
