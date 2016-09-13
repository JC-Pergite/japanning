import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AgendaComponent } from './agenda.component';
import { AgendaListComponent } from './agenda-list.component';
import { AgendaDetailsComponent } from './agenda-details.component';
import { AgendaService } from './agenda.service';
// import { routing } from './agenda.routing';

@NgModule ({
	imports: [ SharedModule ], 
	declarations: [ AgendaComponent, AgendaListComponent, AgendaDetailsComponent  ],
	providers: [ AgendaService ]
})
export class AgendaModule { }
