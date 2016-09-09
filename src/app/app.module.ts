import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgendaModule } from '../agenda/agenda.module';

import { routing }        from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    AgendaModule 
  ],
  declarations: [ AppComponent ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
