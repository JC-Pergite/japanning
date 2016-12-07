import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityListComponent } from './city-list.component';
import { CityDetailsComponent } from './city-details.component';
import { PlanComponent } from './plan/plan.component';
import { PlanListComponent } from './plan/plan-list.component';
import { PlanDetailsComponent } from './plan/plan-details.component';
import { CityResolver } from './city.resolver';


const cityRoutes: Routes = [

			{ path: 'city', component: CityListComponent },
			{ path: 'city/:id', component: CityDetailsComponent,
				resolve:
					{
					city: CityResolver
					}
			}
			// { path: 'city/:id', component: CityDetailsComponent },
			// { path: 'plans', children:
			// 	[ 	
			// 		{ path: '', component: PlanListComponent },
			// 		{ path: ':id', component: PlanDetailsComponent }
			// 	] 
			// }		
];

export const cityRouting: ModuleWithProviders = 
RouterModule.forChild(cityRoutes)