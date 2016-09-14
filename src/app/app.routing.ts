import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  	{ path: '', redirectTo: 'agenda', pathMatch: 'full' },
  	{ path: '', redirectTo: 'city', pathMatch: 'full' }
  	// { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
  	// { path: 'city', loadChildren: './city/city.module#CityModule' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);