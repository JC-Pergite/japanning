import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CurrentAgendaComponent } from './current-agenda.component';
import { CurrentAgendaService } from './current-agenda.service';
import { AgendaListComponent } from '../agenda/agenda-list.component';

@NgModule ({
	imports: [ SharedModule, CurrentAgendaComponent, AgendaListComponent ], 
	declarations: [ CurrentAgendaComponent, AgendaListComponent ],
	providers: [ CurrentAgendaService ]
})
export class CurrentAgendaModule { }
