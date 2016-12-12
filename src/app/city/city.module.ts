import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CityListComponent } from './city-list.component';
import { CityDetailsComponent } from './city-details.component';

import { cityRouting } from './city.routing';
import { CityService } from './city.service';
import { CurrentAgendaComponent } from '../current-agenda/current-agenda.component';
import { AgendaListComponent } from '../agenda/agenda-list.component';

@NgModule ({
	imports: [ SharedModule, cityRouting ], 
	declarations: [ 
					CityListComponent,
					CityDetailsComponent,
					CurrentAgendaComponent
				  ],
	providers: [ CityService ]
})
export class CityModule { }
