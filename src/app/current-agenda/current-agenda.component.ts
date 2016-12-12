import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'app-current-agenda',
  template: `
    <div class="panel panel-default">
              <div *ngFor="let day of agenda" (click)="chosenOne(day)">
                <ul>{{day?.name}}</ul>
                <div *ngIf="selectedDay">
                  <ul *ngFor="let plan of day.plans; let i = index">
                        <li>{{plan?.name}}</li>
                        <button (click)="deletePlan(day, i)">Delete</button>
                  </ul>
                </div>
              </div>
              <label> New Day: <input #newDay /></label>
               <button (click)="addDay(newDay.value); newDay.value=''">Add</button>
    </div> 
  `,
  styleUrls: ['./current-agenda.component.css'],
})
export class CurrentAgendaComponent implements OnInit {

  @Input() newPlan;
  errorMessage: string;
  agenda: Agenda[];
  selectedDay: Agenda[] = [];
  agendas: Agenda;
  private id: number;
  private detail;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() { this.selectAgenda(); }

  selectAgenda() {
      this.agendaService.getAgendas()
          .subscribe(data => { this.agenda = data });
  }

  chosenOne(day) {
      this.selectedDay = day.plans;
      if (this.newPlan !== undefined) {
            this.selectedDay.push(this.newPlan);
            this.agendaService.addAgendas(day)
                .subscribe(data => { 
                                   this.agendas = data; 
                                }, 
                        error => { console.log("Batsu! aka wroong"); 
                                  }
                );
      } else 
        { 
          console.log('nada');
        }
  }

  deletePlan(day, index) {
      this.detail = day.plans[index];
      let planId = this.detail.id;
      for (var i = 0; i < day.plans.length; i++) {
            if ( planId === index ) {
              day.plans.splice(index, 1);
            }
      }
   }

  addDay(name) {
      let makeNew = new Agenda(this.id, name, []);
      this.agendaService.addAgendas(makeNew)
          .subscribe(data => this.agenda.push(data)); 
    }
}