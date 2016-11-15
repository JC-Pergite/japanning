import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders }    from './app.routing';
import { agendaRouting } from './agenda/agenda.routing';

//Feature Modules
import { AgendaData }  from './agenda/agenda-data';

import { AgendaListComponent } from './agenda/agenda-list.component';
import { AgendaModule }  from './agenda/agenda.module';
import { CityModule }    from './city/city.module';
import { CurrentAgendaModule } from './current-agenda/current-agenda.module';
import { AgendaResolver } from './agenda/agenda.resolver';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    routing,
    AgendaModule,
    CityModule  
  ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders, AgendaResolver ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }