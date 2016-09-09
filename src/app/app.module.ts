import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

//App Root
import { AppComponent }  from './app.component';

//Feature Modules
import { routing }       from './app.routing';
import { AgendaModule }  from './agenda/agenda.module';
import { CityModule }    from './city/city.module';
import { PlanComponent } from './city/plan/plan.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    routing,
    AgendaModule,
    CityModule 
  ],
  declarations: [ AppComponent, PlanComponent ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
