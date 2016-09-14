import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaListComponent } from './agenda-list.component';
import { AgendaDetailsComponent } from './agenda-details.component';

const agendaRoutes: Routes = [

    { path: 'agenda', children: 
      	[
            { path: '', component: AgendaListComponent },
            { path: ':id', component: AgendaDetailsComponent }
        ]
    }      
];

export const agendaRouting: ModuleWithProviders =
RouterModule.forChild(agendaRoutes)
