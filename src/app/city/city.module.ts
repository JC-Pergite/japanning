import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CityComponent } from './city.component';
// make separate plan folder?
// import { CityListComponent } from './city-list.component';
// import { CityDetailsComponent } from './city-details.component';
import { CityService } from './city.service';
import { routing } from './city.routing';

@NgModule ({
	imports: [ SharedModule, routing ], 
	declarations: [ CityComponent, CityListComponent, CityDetailsComponent  ],
	providers: [ CityService ]
})
export class CityModule { }
