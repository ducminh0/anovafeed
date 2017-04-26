import { Component, OnInit, NgModule, OnDestroy, EventEmitter, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http'
import { AppStorageService } from '../services/AppStorage.service'
import { LoggerService } from '../services/Logger.service'
import { UtilityService } from '../services/Utility.service'
import * as Constant from '../consts/globals'
import { SelectRouteData } from '../models/DataPages.model'
import { Modal } from 'angular2-modal/plugins/bootstrap'

@Component({
        selector: 'app-template-page',
        templateUrl: './template-page.component.html',
        styleUrls: ['./template-page.component.css']
})
export class TemplatePageComponent implements OnInit {

        constructor(private _appStorageService: AppStorageService, private http: Http, private _logger: LoggerService, public modal: Modal, private vcRef: ViewContainerRef) {
        }

        ngOnInit() {

        }
        ngOnDestroy() {

        }

        private displayNoTemplateMessage(title, message) {
                this.modal.alert()
                        .size('lg')
                        .dialogClass('modal-dialog tempMsg')
                        .showClose(false)
                        .isBlocking(true)
                        .headerClass('modal-header tempMsg-header')
                        .title(title)
                        .body(`<table>
                                <tr>
                                <td class="noteArrow"><img src="./images/general/note_arrow.png"></td>
                                <td>${message}</td>
                                </tr>
                                </table>
                        `)
                        .bodyClass('modal-body tempMsg-body')
                        .footerClass('modal-footer tempMsg-footer')
                        .okBtnClass('btn btn-primary fpButtonNav tempMsgBtn')
                        .open().then( (resultPromise) => {
        resultPromise.result.then( (result) => {
          //TODO - OKBTN
          window.location.href = localStorage.getItem('returnUrl');
        }, 
        () => {
          //TODO - CANCELBTN
        } );
    });;
        }
}
