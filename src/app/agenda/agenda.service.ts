import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Agenda } from './agenda';
import { Plan } from '../city/plan/plan';

@Injectable()
export class AgendaService {

	private agendaUrl = 'app/agenda/agendas.json';

	constructor(private http: Http) { };

	getAgendas(): Observable<Agenda[]> {
		return this.http
			.get(this.agendaUrl)
			.map((res: Response) => res.json().data || {})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}
}