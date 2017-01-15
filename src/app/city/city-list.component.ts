import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { City } from './city';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-city-list',
  template: `
  <div class="container">
    <div class="row stylish-panel row-flex" *ngFor="let city of cities | async">
      <div class="col-md-3">
        <div>
          <img src={{city.pic}} alt="Texto Alternativo" class="img-circle img-thumbnail">
        </div>
          <div class="flexx flex-grow">
            <h2>{{city.name}}</h2>
            <p>{{city.description}}</p>
          </div>
          <a [routerLink]="['./' + city.id]" class="btn btn-primary" title="See more">Explore »</a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: Observable<Array<City>>;

  constructor(private cityService: CityService) { }

  ngOnInit() { this.getCities(); }

  getCities() {
      this.cities = this.cityService.getCities();
  }

}