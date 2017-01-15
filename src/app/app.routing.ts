import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  	{ path: '', redirectTo: 'city', pathMatch: 'full' },
  	{ path: '', redirectTo: 'agenda', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);