import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders }    from './app.routing';

//Feature Modules
import { AgendaModule }  from './agenda/agenda.module';
import { CityModule }    from './city/city.module';
import { CurrentAgendaModule } from './current-agenda/current-agenda.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AgendaModule,
    CityModule
  ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
