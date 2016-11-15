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
// .map(agenda => {this.agenda = agenda; return this.agenda;}) 
    // 	if(agenda) {
    // 		return agenda;
    // 	} else { // id not found
    //     this.router.navigate(['/']);
    //     return false;
    //   }
    // }).first();
  }

  
}

// @Injectable()
// export class AgendaResolver implements Resolve<any> {
  
//   constructor(private agendaService: AgendaService, 
//   			  private router: Router) {}
  
//   resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any { 
//   	let id = +route.params['id'];
//   	console.log(this.id);
//     return this.agendaService.getAgenda(id).map(agendas => {
//     	if(agendas) {
//     		return agendas;
//     	} else { // id not found
//         this.router.navigate(['/']);
//         return false;
//       }
//     }).first();
//   }
// }