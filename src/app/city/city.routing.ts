import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityListComponent } from './city-list.component';
import { PlanListComponent } from './plan/plan-list.component';
import { PlanDetailsComponent } from './plan/plan-details.component';

const cityRoutes: Routes = [

	{ path: 'city', children: 
		[
			{ path: '', component: CityListComponent },
			{ path: 'plans', children:
				[ 	
					{ path: '', component: PlanListComponent },
					{ path: ':id', component: PlanDetailsComponent }
				] 
			}		
		] 
	}
];

export const cityRouting: ModuleWithProviders = 
RouterModule.forChild(cityRoutes)