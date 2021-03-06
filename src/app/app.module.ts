import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { ModalModule } from 'ng2-bootstrap/modal';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders }    from './app.routing';
import { agendaRouting } from './agenda/agenda.routing';

//Feature Modules
import { AgendaData }  from './agenda/agenda-data';
import { AgendaModule }  from './agenda/agenda.module';
import { CityModule }    from './city/city.module';
import { AgendaResolver } from './agenda/agenda.resolver';
import { CityResolver } from './city/city.resolver';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(AgendaData, {passThruUnknownUrl: true}),
    JsonpModule,
    FormsModule,
    ModalModule.forRoot(),
    Angular2FontawesomeModule,
    routing,
    CityModule,
    AgendaModule
  ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders, AgendaResolver, CityResolver, 
                { provide: XHRBackend, useClass: InMemoryBackendService },
                { provide: AgendaData, useClass: InMemoryWebApiModule } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }