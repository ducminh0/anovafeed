import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import * as Constant from '../consts/globals';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import {NavInfo, IndexValidation, QualifiedInfo, QualifiedState } from '../models/DataPages.model';

@Component({
  selector: 'app-bot-nav',
  templateUrl: './bot-nav.component.html',
  styleUrls: ['./bot-nav.component.css'],
  outputs: ['outIndex']
})
export class BotNavComponent implements OnInit {
  @Input() _index;
  outIndex: EventEmitter<number> = new EventEmitter();
  compNextName: string;
  compPreviousName: string;
  nextButtonEnable: {};


  constructor(private vcRef: ViewContainerRef) {
    
  }

  ngOnInit() {
  
  }
  
}
