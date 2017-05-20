import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/modal';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders }    from './app.routing';

//Feature Modules
import { AgendaData }  from './agenda/agenda-data';
import { CityModule }    from './city/city.module';
import { AgendaResolver } from './agenda/agenda.resolver';
import { CityResolver } from './city/city.resolver';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule.forRoot(),
    Angular2FontawesomeModule,
    routing,
    CityModule
  ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders, AgendaResolver, CityResolver ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }