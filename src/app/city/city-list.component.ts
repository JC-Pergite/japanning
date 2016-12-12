import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-city-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let city of cities | async">
        <a [routerLink]="['./' + city.id]">{{city.name}}</a>
        </li>
      </ul>
    </div> 
  `
})
export class CityListComponent implements OnInit {

  cities: Observable<Array<City>>;

  constructor(private cityService: CityService) { }

  ngOnInit() { this.getCities(); }

  getCities() {
      this.cities = this.cityService.getCities();
  }

}
