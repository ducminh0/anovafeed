import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BotNavComponent } from './bot-nav/bot-nav.component';
import { TemplatePageComponent } from './template-page/template-page.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {ConfigService} from "./services/Config.service";
import {LoggerService} from "./services/Logger.service";
import {AppStorageService} from './services/AppStorage.service';
import {UtilityService} from './services/Utility.service';
import { Ng2TableModule } from 'ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import {BusyModule} from 'angular2-busy';

export function startupServiceFactory(startupService: AppStorageService): Function {
    return () => startupService.init();
}
@NgModule({
  declarations: [
    AppComponent,  
    TopNavComponent,
    BotNavComponent,
    TemplatePageComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2TableModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    CustomFormsModule,
    BootstrapModalModule,
    BusyModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConfigService,
    AppStorageService,
    LoggerService,
    UtilityService,    
    { provide: APP_INITIALIZER,
      useFactory: startupServiceFactory, //read config by config service
      deps: [AppStorageService],
      multi: true }   
      ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }