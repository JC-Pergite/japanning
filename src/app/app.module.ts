import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

//App Root
import { AppComponent }  from './app.component';
import { routing, appRoutingProviders }    from './app.routing';

//Feature Modules
import { AgendaModule }  from './agenda/agenda.module';
import { CityModule }    from './city/city.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    routing,
    AgendaModule,
    CityModule
  ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
