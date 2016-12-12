import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'kore-agenda-details',
  template: `
    <div class="panel panel-default">
            <div class="panel-heading" *ngFor="let day of agenda">
                <h3>Plans: {{day.name}}</h3>
              <div *ngIf="day?.plans?.length > 0">
                <ul *ngFor="let plan of day?.plans; let i = index">
                      <a [routerLink]="['./plans/', plan.id]">{{plan.name}}</a> 
                      <button (click)="deletePlan(day, i)">Delete</button>
                </ul>
              </div>
            </div>
    </div>        
        `,
})
export class AgendaDetailsComponent implements OnInit {
  
  agenda;
  detail;

  constructor(private route: ActivatedRoute, 
              private agendaService: AgendaService) { }

  ngOnInit() { this.getAgenda();}

  getAgenda() {
      this.agenda = this.route.snapshot.data['agenda'];
    }

  deletePlan(day, index) {
      this.detail = day.plans[index];
      let planId = this.detail.id;
      for (var i = 0; i < this.agenda.length; i++) {
            if ( planId === index ) {
              this.agenda[i].plans.splice(index, 1);
            }
      }
      this.agendaService.updateAgenda(day)
          .subscribe(data => this.agenda.plans = data);
   }

}