import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { City } from '../city/city';

@Component({
  selector: 'app-city-list',
  template: `
  	<div *ngFor="let city of cities | async">
  		<a routerLink="{{'../' + city.id}}">{{city.name}}</a>
  	</div>	 
  `
})
export class CityListComponent implements OnInit {
  
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit() {
  	// this.cities = this.cityService.getCities();
  }

}
