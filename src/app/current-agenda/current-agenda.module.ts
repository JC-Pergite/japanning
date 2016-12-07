import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CurrentAgendaComponent } from './current-agenda.component';
import { CurrentAgendaService } from './current-agenda.service';
import { AgendaListComponent } from '../agenda/agenda-list.component';

@NgModule ({
	imports: [ SharedModule ], 
	exports: [ CurrentAgendaComponent ],
	declarations: [ CurrentAgendaComponent, AgendaListComponent ],
	providers: [ CurrentAgendaService ]
})
export class CurrentAgendaModule { }


// import './rxjs-operators';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
// import { InMemoryBackendService, InMemoryWebApiModule} from 'angular-in-memory-web-api';
// // import { InMemoryDataService }  from './in-memory-data-service';

// import { AppComponent } from './app.component';

// import { routing, appRoutingProviders }    from './app.routing';
// import { agendaRouting } from './agenda/agenda.routing';

// //Feature Modules
// import { AgendaData }  from './agenda/agenda-data';

// import { AgendaListComponent } from './agenda/agenda-list.component';
// import { AgendaModule }  from './agenda/agenda.module';
// import { CityModule }    from './city/city.module';
// import { CurrentAgendaModule } from './current-agenda/current-agenda.module';
// import { AgendaResolver } from './agenda/agenda.resolver';

// @NgModule({
//   imports: [
//     BrowserModule,
//     HttpModule,
//     InMemoryWebApiModule.forRoot(AgendaData),
//     JsonpModule,
//     FormsModule,
//     routing,
//     AgendaModule,
//     CityModule  
//   ],
//   declarations: [ AppComponent ],
//   providers: [ appRoutingProviders, AgendaResolver, { provide: XHRBackend, useClass: InMemoryBackendService },
//   { provide: AgendaData, useClass: InMemoryWebApiModule } ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule { }