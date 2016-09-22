import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CityListComponent } from './city-list.component';
import { PlanListComponent } from './plan/plan-list.component';
import { PlanDetailsComponent } from './plan/plan-details.component';
import { cityRouting } from './city.routing';
import { CityService } from './city.service';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';
import { CurrentAgendaComponent } from '../current-agenda/current-agenda.component';


@NgModule ({
	imports: [ SharedModule, cityRouting ], 
	declarations: [ PlanDetailsComponent, 
					PlanListComponent, 
					CityListComponent,
					CurrentAgendaComponent
				  ],
	providers: [ CityService, CurrentAgendaService ]
})
export class CityModule { }
