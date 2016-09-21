import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CityListComponent } from './city-list.component';
// import { PlanComponent } from './plan/plan.component';
import { PlanListComponent } from './plan/plan-list.component';
import { PlanDetailsComponent } from './plan/plan-details.component';
import { cityRouting } from './city.routing';
import { CityService } from './city.service';
import { CurrentAgendaModule } from '../current-agenda/current-agenda.module';


@NgModule ({
	imports: [ SharedModule, cityRouting, CurrentAgendaModule ], 
	declarations: [ CityListComponent, 
					PlanListComponent, 
					PlanDetailsComponent, 
					CurrentAgendaModule 
				  ],
	providers: [ CityService ]
})
export class CityModule { }
