import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CityListComponent } from './city-list.component';
// import { PlanComponent } from './plan/plan.component';
import { PlanListComponent } from './plan/plan-list.component';
import { PlanDetailsComponent } from './plan/plan-details.component';
import { cityRouting } from './city.routing';
import { CityService } from './city.service';
import { CurrentAgendaComponent } from '../current-agenda/current-agenda.component';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';

@NgModule ({
	imports: [ SharedModule, cityRouting ], 
	declarations: [ CityListComponent, 
					PlanListComponent, 
					PlanDetailsComponent 
				  ],
	providers: [ CityService, CurrentAgendaService ]
})
export class CityModule { }
