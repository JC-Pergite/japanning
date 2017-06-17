import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from "@angular/common";

import { HttpModule, BaseRequestOptions, JsonpModule, XHRBackend, BrowserXhr,
         ResponseOptions,  XSRFStrategy } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

// import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders }    from './app.routing';

//Feature Modules
import { AgendaData }  from './agenda/agenda-data';
import { AgendaModule }  from './agenda/agenda.module';
import { CityModule }    from './city/city.module';
import { AgendaResolver } from './agenda/agenda.resolver';
import { CityResolver } from './city/city.resolver';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    JsonpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    // Angular2FontawesomeModule,
    routing,
    AgendaModule,
    CityModule
  ],
  declarations: [ AppComponent ],

  providers: [ appRoutingProviders, AgendaResolver, CityResolver ], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }