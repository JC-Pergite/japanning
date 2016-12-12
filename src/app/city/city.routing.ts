import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityListComponent } from './city-list.component';
import { CityDetailsComponent } from './city-details.component';
import { CityResolver } from './city.resolver';

const cityRoutes: Routes = [

			{ path: 'city', component: CityListComponent },
			{ path: 'city/:id', component: CityDetailsComponent,
				resolve:
					{
					city: CityResolver
					}
			}
];

export const cityRouting: ModuleWithProviders = 
RouterModule.forChild(cityRoutes)