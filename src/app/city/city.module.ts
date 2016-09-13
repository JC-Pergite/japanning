import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


// make separate plan folder?
import { CityComponent } from './city.component';
// import { CityListComponent } from './city-list.component';
import { CityService } from './city.service';
// import { routing } from './city.routing';

@NgModule ({
	imports: [ SharedModule, ], 
	declarations: [ CityComponent,  ],
	providers: [ CityService ]
})
export class CityModule { }
