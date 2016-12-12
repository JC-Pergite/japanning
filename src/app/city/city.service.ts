import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { City } from './city';


@Injectable()
export class CityService {

  	private cityUrl = 'http://localhost:4200/app/cities';
    private plansUrl: string = 'app/city/plan/plans.json';

	constructor (private http: Http) {}

	getCities(): Observable<any> {
		return this.http
			.get(this.cityUrl)
			.map((res: Response) => <City>res.json().data || {} )
			.do(cities => console.log(JSON.parse(JSON.stringify(cities))))
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}

	getCity(id): Observable<any> {
        return this.http
          .get(`${this.cityUrl}`) 
            .map(res => (<City[]>res.json().data).filter(city => city.id == id))
            .do(city => console.log(JSON.parse(JSON.stringify(city))))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))    
    }

}