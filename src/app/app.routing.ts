import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AgendaListComponent } from './agenda/agenda-list.component';
// import { CityListComponent } from './city/city-list.component';

const jappRoutes: Routes = [
  { path: '', component: AgendaComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(jappRoutes);