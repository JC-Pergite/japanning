import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Agenda } from './agenda';
import { Plan } from '../city/plan/plan';


@Injectable()
export class AgendaService {  


	private agendaUrl = 'http://localhost:4200/app/agenda/agendas.json';

	constructor(private http: Http) { };

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
          return headers;
    }


	getAgendas(): Observable<any> {
       
		return this.http
			.get(this.agendaUrl)
      .map((res: Response) => res.json().agenda || {})

      .do(agendas => console.log(JSON.parse(JSON.stringify(agendas))))
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'))	
	}

    private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

    getAgenda(id): Observable<any> {
        return this.http
          .get(`${this.agendaUrl}`) 
            .map(res => (<Agenda[]>res.json().agenda).filter(agenda => agenda.id == id))
            .do(agenda => console.log(JSON.parse(JSON.stringify(agenda))))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))    
    }


	  addAgenda (body: Object): Observable<Agenda[]> {
        let bodyString = JSON.stringify(body); 
        let headers    = new Headers({ 'Content-Type': 'application/json' }); 
        let options    = new RequestOptions({ headers: headers }); 

        return this.http
        	.post(this.agendaUrl, body, options) 
            .map((res:Response) => res.json().data || {}) 
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 

    updateAgenda (body: Object): Observable<Agenda[]> {
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers }); 

        return this.http
        	.put(`${this.agendaUrl}/${body['id']}`, body, options) 
            .map((res:Response) => res.json().data || {}) 
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }   

    removeAgenda (id: string): Observable<Agenda> {
      console.log(id);
        return this.http
        	.delete(`${this.agendaUrl}/${id}`) 
            .map((res:Response) => res.json().data || {})
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }   
}