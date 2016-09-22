import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { City } from '../city/city';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'app-city-list',
  template: `
    <div *ngFor="let city of cities">
      <a routerLink="{{'./' + 'plans'}}">{{city.plans}}</a>
    </div> 
    <div>  
      <app-current-agenda></app-current-agenda>
    </div>  
  `
})
export class CityListComponent implements OnInit {

  errorMessage: string;
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit() { this.getCities(); }

  getCities() {
      this.cityService.getCities()
      .subscribe(cities => this.cities = cities,
                  error => this.errorMessage = <any>error);               
  }

}
