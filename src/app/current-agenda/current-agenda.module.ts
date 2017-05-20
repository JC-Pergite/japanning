import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CurrentAgendaComponent } from './current-agenda.component';
import { AgendaModule }  from '../agenda/agenda.module';

@NgModule ({
	imports: [ SharedModule, AgendaModule ], 
	exports: [ CurrentAgendaComponent ],
	declarations: [ CurrentAgendaComponent ]
})
export class CurrentAgendaModule { }