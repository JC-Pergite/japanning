import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CurrentAgendaModule } from '../current-agenda/current-agenda.module';

import { CityListComponent } from './city-list.component';
import { CityDetailsComponent } from './city-details.component';
import { SafeYoutubePipe } from './safe-youtube.pipe';

import { cityRouting } from './city.routing';
import { CityService } from './city.service';

@NgModule ({
	imports: [ SharedModule, cityRouting, CurrentAgendaModule ], 
	declarations: [ 
					CityListComponent,
					CityDetailsComponent,
					SafeYoutubePipe
				  ],
	providers: [ CityService ]
})
export class CityModule { }
