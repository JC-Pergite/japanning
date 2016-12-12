import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Agenda } from './agenda';
import { Plan } from '../city/plan/plan';

@Injectable()
export class AgendaService {  

  private agendaUrl = 'http://localhost:4200/app/agendas';

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private http: Http) { };

  getAgendas(): Observable<any> {
       
    return this.http
      .get(this.agendaUrl)
      .map((res: Response) => res.json().data || {})
      .do(agendas => console.log(JSON.parse(JSON.stringify(agendas))))
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))  
  }

  getAgenda(id): Observable<any> {

    return this.http
      .get(`${this.agendaUrl}`) 
      .map(res => (<Agenda[]>res.json().data).filter(agenda => agenda.id == id) || {})
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))    
    }

  updateAgenda (updated): Observable<Agenda> {

      let body = JSON.parse(JSON.stringify(updated));
      let headers      = new Headers({ 'Content-Type': 'application/json' }); 
      let options       = new RequestOptions({ headers: headers }); 

      return this.http
        .put(`${this.agendaUrl}/${body['id']}`, body, options) 
        .map((res:Response) => res.json()) 
        .do(agenda => console.log(JSON.parse(JSON.stringify(agenda))))
        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }   

  addAgendas (newDay): Observable<Agenda> {

      let body = JSON.parse(JSON.stringify(newDay));
      let headers    = new Headers({ 'Content-Type': 'application/json' }); 
      let options    = new RequestOptions({ headers: headers });

      return this.http
        .post(this.agendaUrl, body, options)
        .map((res:Response) => res.json().data as Agenda) 
        .do(agenda => console.log(JSON.parse(JSON.stringify(agenda))))
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeAgenda (id): Observable<Agenda[]> {

      return this.http
        .delete(`${this.agendaUrl}/${id}`) 
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }  

}