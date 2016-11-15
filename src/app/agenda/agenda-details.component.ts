import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router }    from '@angular/router';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
	selector: 'kore-agenda-details',
	template: `
		<div class="panel panel-default">
            <div class="panel-heading" *ngFor="let day of agenda">
                     <h3>Plans: {{day.name}}</h3>
              <div *ngIf="day?.plans.length > 0">
                  
                  <ul>
                      <li *ngFor="let plan of day?.plans">
                        {{plan.name}} {{plan.description}} 
                      <button (click)="deletePlan(plan)">Delete</button>

                      </li>

                      <li>Hey</li>

                            <label> New Plan: <input #newPlan /></label>
    
                  </ul>

              </div>
              <div class="panel-footer">

                  <button class="btn btn-info" (click)="editComment($event)">
                  <span class="glyphicon glyphicon-edit"></span>Edit</button>
              </div>
            </div>  
    </div>        
        `

})
export class AgendaDetailsComponent implements OnInit {
  

  agenda;

	constructor(private route: ActivatedRoute, 
				private agendaService: AgendaService,
				private currentAgendaService: CurrentAgendaService) { }

  ngOnInit() { this.getAgenda();}

  getAgenda() {
 
      this.agenda = this.route.snapshot.data['agenda'];

    }


}