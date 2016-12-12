import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CurrentAgendaComponent } from './current-agenda.component';
import { AgendaListComponent } from '../agenda/agenda-list.component';

@NgModule ({
	imports: [ SharedModule ], 
	exports: [ CurrentAgendaComponent ],
	declarations: [ CurrentAgendaComponent, AgendaListComponent ]
})
export class CurrentAgendaModule { }