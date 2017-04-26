import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import * as Constant from '../consts/globals';
import { Modal } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-bot-nav',
  templateUrl: './bot-nav.component.html',
  styleUrls: ['./bot-nav.component.css']
})
export class BotNavComponent implements OnInit {

  constructor(private vcRef: ViewContainerRef) {
    
  }

  ngOnInit() {
  
  }
  
}
