import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, 
		 RouterStateSnapshot, Router } from '@angular/router';
import { AgendaService } from './agenda.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AgendaResolver implements Resolve<any> {
  
  constructor(private agendaService: AgendaService, private router: Router ) {}
  
  resolve(route: ActivatedRouteSnapshot, 
  	state: RouterStateSnapshot): Observable<any> {

  	let id = +route.params['id'];
    return this.agendaService.getAgenda(id)
    	.map(agendas => {
    		console.log('agendas', agendas);
    		if (agendas) {
    			return agendas;    			
    		} else {
    			this.router.navigate(['/']);
    			return false;
    		}
    	});
  }
}