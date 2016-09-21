import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Agenda } from './agenda';
import { Plan } from '../city/plan/plan';

@Injectable()
export class AgendaService {    // REMEMBER TO CHANGE AGENDA.ts BACK for Plan Array

	private agendaUrl = 'app/agenda/agendas.json';

	constructor(private http: Http) { };

	getAgendas(): Observable<Agenda[]> {
		return this.http
			.get(this.agendaUrl)
			.map((res: Response) => res.json().data || {})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}

	addAgenda (body: Object): Observable<Agenda[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options    = new RequestOptions({ headers: headers }); // Create a request option

        return this.http
        	.post(this.agendaUrl, body, options) // ...using post request
            .map((res:Response) => res.json().data || {}) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    } 

    updateAgenda (body: Object): Observable<Agenda[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http
        	.put(`${this.agendaUrl}/${body['id']}`, body, options) // ...using put request
            .map((res:Response) => res.json().data || {}) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    // Delete a comment
    removePlan (id:string): Observable<Agenda[]> {
        return this.http
        	.delete(`${this.agendaUrl}/plans/${id}`) // ...using put request
            .map((res:Response) => res.json().data || {}) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   
}