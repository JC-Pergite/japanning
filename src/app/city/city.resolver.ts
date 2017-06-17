import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Resolve, ActivatedRouteSnapshot, 
		 RouterStateSnapshot, Router } from '@angular/router';

import { CityService } from './city.service';
import { Observable } from 'rxjs/Observable';
import { City } from './city';

@Injectable()
export class CityResolver implements Resolve<any> {
  
  city;
  constructor(private cityService: CityService, 
  			  private router: Router, private http: Http) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> { 
  	let id = route.params['id'];
    return this.cityService.getCity(id)
  }
  
}