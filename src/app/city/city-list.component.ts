import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';
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

  errorMessage: string;
  cities: Observable<Array<City>>;
  // cities: City;

  constructor(private cityService: CityService) { }

  ngOnInit() { this.getCities(); }

  getCities() {
    console.log(this.cities);
      this.cities = this.cityService.getCities();
      // .subscribe(cities => this.cities = cities,
      //             error => this.errorMessage = <any>error);               
  }

}
