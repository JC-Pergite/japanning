import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { CityListComponent } from './city-list.component';
import { PlanListComponent } from './plan/plan-list.component';
import { PlanDetailsComponent } from './plan/plan-details.component';
import { cityRouting } from './city.routing';
import { CityService } from './city.service';

@NgModule ({
	imports: [ SharedModule, cityRouting ], 
	declarations: [ PlanListComponent, PlanDetailsComponent ],
	providers: [ CityService ]
})
export class CityModule { }
