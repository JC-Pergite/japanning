import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AgendaListComponent } from './agenda-list.component';
import { AgendaDetailsComponent } from './agenda-details.component';
import { agendaRouting } from './agenda.routing';
import { AgendaService } from './agenda.service';

@NgModule ({
	imports: [ SharedModule, agendaRouting ], 
	declarations: [ AgendaListComponent, AgendaDetailsComponent  ],
	providers: [ AgendaService ]
})
export class AgendaModule { }
