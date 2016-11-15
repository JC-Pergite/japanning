import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaListComponent } from './agenda-list.component';
import { AgendaDetailsComponent } from './agenda-details.component';
import { AgendaResolver } from './agenda.resolver';

const agendaRoutes: Routes = [

            { path: 'agenda', component: AgendaListComponent },
             { path: 'agenda/:id', component: AgendaDetailsComponent,
              resolve: 
              {
                agenda: AgendaResolver
              } 
            }
       
          
];
// const agendaRoutes: Routes = [

//     { path: 'agenda', children: 
//         [
//             { path: '', component: AgendaListComponent },
//             { path: ':id', component: AgendaDetailsComponent,
//               resolve: 
//               {
//                 agenda: AgendaResolver
//               } 
//             }
//         ]
//     }      
// ];

export const agendaRouting: ModuleWithProviders =
RouterModule.forChild(agendaRoutes)

// const agendaRoutes: Routes = [

//     { path: 'agenda', children: 
//         [
//             { path: '', component: AgendaListComponent },
//             { path: ':id', component: AgendaDetailsComponent,
//               resolve: 
//               {
//                 agenda: AgendaResolver
//               } 
//             }
//         ]
//     }      
// ];