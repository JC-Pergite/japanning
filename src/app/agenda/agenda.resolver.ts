import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Resolve, ActivatedRouteSnapshot, 
		 RouterStateSnapshot, Router } from '@angular/router';

import { AgendaService } from './agenda.service';
import { Observable } from 'rxjs/Observable';
import { Agenda } from './agenda';

@Injectable()
export class AgendaResolver implements Resolve<any> {
  agenda;
  constructor(private agendaService: AgendaService, 
  			  private router: Router, private http: Http) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Agenda> { 
  	let id = route.params['id'];
    return this.agendaService.getAgenda(id)
  }

}