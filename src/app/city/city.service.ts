import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Plan } from './plan/plan';
import { City } from './city';


@Injectable()
export class CityService {

  	private cityUrl: string = 'app/city/cities.json';
    private plansUrl: string = 'app/city/plan/plans.json';


	constructor (private http: Http) {}

	getCities(): Observable<City[]> {
		return this.http
			.get(this.cityUrl)
			.map((res: Response) => res.json().data || {})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}

	getPlans(): Observable<Plan[]> {
		return this.http
			.get(this.plansUrl)
			.map((res: Response) => res.json().data || {})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}

	// getPlans(): Observable<Plan[]> {
	//     let plans$ = this.http
	//       .get(`${this.plansUrl}/plans`, { headers: this.getHeaders() })
	//       .map(this.mapPlans);
	//     return plans$;
 //  	}

  	private getHeaders() {
	    let headers = new Headers();
	    headers.append('Accept', 'application/json');
	  	return headers;
    }

  	mapPlans(res: Response): Plan[] {
   		return res.json().results.map(this.toPlan)
	}

	toPlan(r: any): Plan {
	  	let plan = <Plan> ({
	      id: this.extractId(r),
	      name: r.name,
	      description: r.description,
	      url: r.url
	    });
	 	console.log('You planned:', plan);
	  	return plan;
	}

	getDetails(id): Observable<Plan> {
		return this.http
			.get('cityUrl/plans' + id)
			.map((res: Response) => res.json().data || {})
	}

	extractId(planData: any) {
		//change the replace(url) after
		let extractedId = planData.url.replace('app/city/plans.json','').replace('/','');
		return parseInt(extractedId);
	}

	get(id: number): Observable<Plan> {
	    let plan$ = this.http
	      .get(`${this.plansUrl}/plans/${id}`, { headers: this.getHeaders() })
	      .map(this.mapPlan);
	    return plan$;
  	}

    mapPlan(res: Response): Plan {
   		return this.toPlan(res.json());
	}

	save(plan: Plan): Observable<Response> {
		return this
			.http
			.put(`${this.plansUrl}/plans/${plan.id}`, JSON.stringify(plan), 
				{ headers: this.getHeaders() });
	}

}