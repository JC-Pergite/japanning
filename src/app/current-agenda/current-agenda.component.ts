import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

import { AgendaService } from '../agenda/agenda.service';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'app-current-agenda',
  template: `

  <div class="panel panel-default current">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       {{choice?.name}}
      </button>
      <div class="dropdown-menu">
        <ul *ngFor="let day of agenda">
          <li class="dropdown-item" (click)="chosenOne(day)">{{day.name}}</li>
        </ul>
      </div>
      <div *ngIf="selectedDay">
        <ul class="custom-bullet" [(ngModel)]="choice" *ngFor="let plan of choice?.plans; 
            let i = index; trackBy: trackByFn" ngDefaultControl>
              <li>{{plan?.name}}</li>
              <button type="button" class="btn btn-danger btn-sm deletePlan" 
                (click)="deletePlan(choice, i)">
                  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </button>
        </ul>
      </div>
    </div>
    <div>
       <label><input class="inputBox" placeholder="Day Name" #newDay/></label>
       <button class="btn btn-primary btn-sm addDay" role="button" (click)="addDay(newDay.value); 
         newDay.value=''">
           Add Day!
       </button>
    </div>
  </div>        
  `,
  styleUrls: ['./current-agenda.component.css']
})
export class CurrentAgendaComponent implements OnInit, OnDestroy {

  agenda: Agenda[];
  selectedDay: Agenda[] = [];
  agendas: Agenda;
  private id: number;
  choice = null;
  noDay: boolean;
  private alive: boolean = true;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() { this.selectAgenda(); }

  selectAgenda() {
      this.agendaService.getAgendas()
          .takeWhile(() => this.alive)
          .subscribe(data => { this.agenda = data });
  }

  chosenOne(day) {
      this.choice = day;
      this.selectedDay = day.plans;
  }

  addPlan(newPlan){
          if (this.choice != null) { 
                this.noDay = false; 
          } else { this.noDay = true; };

      this.selectedDay.push(newPlan);
      this.agendaService.addAgendas(this.choice)
          .takeWhile(() => this.alive)
          .subscribe(data => { this.agendas = data; },
                    error => { console.log("Batsu! aka wrong"); }
          );
  }

  trackByFn(index, item) {
    return item.id;
  } 

  deletePlan(day, index) {
      let planId = day.plans[index].id;
      for (var i = 0; i < day.plans.length; i++) {
            if ( day.plans[i].id === planId ) {
              day.plans.splice(index, 1);
            }
      }
       this.agendaService.updateAgenda(day)
          .takeWhile(() => this.alive)
          .subscribe(data => this.agendas = data);
  }

  addDay(name) {
      let makeNew = new Agenda(this.id, name, "", "", "", []);
      this.choice = makeNew;
      this.agendaService.addAgendas(makeNew)
          .takeWhile(() => this.alive)
          .subscribe(data => { this.agenda.push(data); },                            
                     error => { console.log("Batsu! aka wrong"); },                            
                     ()   => { this.choice = this.agenda[this.agenda.length - 1]; 
                                 this.chosenOne(this.choice); 
                              }
          );
  }

  ngOnDestroy() {
     this.alive = false;
   }

}