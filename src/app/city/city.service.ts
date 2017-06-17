import { Injectable }     from '@angular/core';
import { environment } from './../../environments/environment';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';


import { City } from './city';
import { Plan } from './plan';

const apiUrl = environment.apiUrl;

@Injectable()
export class CityService {

  	// private cityUrl = 'http://localhost:4200/app/cities';
  	// private cityUrl = '/api/city';

	constructor (private http: Http) {}

	getCities(): Observable<City> {
		return this.http
			.get(apiUrl + '/city')
			.map((res: Response) => <City>res.json().data || {} )
			.do(cities => console.log(JSON.parse(JSON.stringify(cities))))
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}

	getCity(id): Observable<City[]> {
        return this.http
          .get(apiUrl + '/city/' + id) 
            .map(res => (<City[]>res.json().data).filter(city => city.id == id))
            .do(city => console.log(JSON.parse(JSON.stringify(city))))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))    
    }

}