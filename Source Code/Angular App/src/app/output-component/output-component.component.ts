import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
import {ProcessorService} from '../services/Processor.service'
import {AppStorageService} from '../services/AppStorage.service'

import { InputBase, OutputBase } from '../models/InputModel.model'

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {
  @Input() public input: InputBase; // get input from input component

  public graphData:OutputBase; //data or whatever want to bind to UI

  public set value(val: InputBase) { // handle changes when input changes
    this.input = val;
    this.handleInput(); // call service to handle input
  }

  constructor(private appStorate: AppStorageService, private processorService: ProcessorService) { }

  ngOnInit() {
    
  }

  handleInput() {
    this.graphData = this.processorService.handleInput(this.input);
  }




}
