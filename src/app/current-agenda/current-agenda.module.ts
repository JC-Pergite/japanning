import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CurrentAgendaComponent } from './current-agenda.component';
import { CurrentAgendaService } from './current-agenda.service';
import { AgendaListComponent } from '../agenda/agenda-list.component';

@NgModule ({
	imports: [ SharedModule, AgendaListComponent ], 
	exports: [ CurrentAgendaComponent ],
	declarations: [ AgendaListComponent, CurrentAgendaComponent ],
	providers: [ CurrentAgendaService ]
})
export class CurrentAgendaModule { }
