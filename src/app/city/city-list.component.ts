import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { City } from '../city/city';

@Component({
  selector: 'app-city-list',
  template: `
    <div *ngFor="let city of cities">
      <a routerLink="{{'./' + 'plans'}}">{{city.plans}}</a>
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
