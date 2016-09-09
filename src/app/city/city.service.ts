import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//consider seperate Plan subfolder with PlanService 
@Injectable()
export class CityService {

  	private cityUrl: string = 'app/city/plans';//URL to web API 'http://cityUrl/.co.api'

	constructor (private http: Http) {}


	getPlans(): Observable<Plan[]> {
	    let plan$ = this.http
	      .get(`${this.cityUrl}/city`, { headers: this.getHeaders() })
	      .map(mapPlans);
	    return plan$;
  	}

  	private getHeaders() {
	    let headers = new Headers();
	    headers.append('Accept', 'application/json');
	  	return headers;
    }

  	mapPlans(res: Response): Plan[] {
   		return res.json().results.map(toPlan)
	}

	toPlan(r: any): Plan {
	  	let plan = <Plan> ({
	      id: extractId(r),
	      name: r.name,
	      description: r.description,
	      url: r.url
	    });
	 	console.log('You planned:', plan);
	  	return plan;
	}

	extractId(planData: any) {
		//change the replace(url) after
		let extractedId = planData.url.replace('app/city/plans','').replace('/','');
		return parseInt(extractedId);
	}

	get(id: number): Observable<Plan> {
	    let plan$ = this.http
	      .get(`${this.cityUrl}/plans/${id}`, { headers: this.getHeaders() })
	      .map(mapPlan);
	    return plan$;
  	}

    mapPlan(res: Response): Plan {
   		return toPlan(res.json());
	}

	save(plan: Plan): Observable<Response> {
		return this
			.http
			.put(`${this.cityUrl}/plans/${plan.id}`, JSON.stringify(plan), 
				{ headers: this.getHeaders() });
	}

}