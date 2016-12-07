import { Component, OnInit, EventEmitter, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { CurrentAgendaService } from './current-agenda.service';
import { CityService } from '../city/city.service';
import { AgendaService } from '../agenda/agenda.service';
import { Plan } from '../city/plan/plan';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'app-current-agenda',
  // templateUrl: './current-agenda.component.html',
  template: `
    <div class="panel panel-default">
              <div *ngFor="let day of agenda | async" (click)="chosenOne(day)">
                <ul>{{day?.name}}</ul>
                <div *ngIf="selectedDay">
                  <ul *ngFor="let plan of day.plans; let i = index">
                        <li>{{plan?.name}}</li>
                  </ul>
                </div>
              </div>
                          <label> New Day: <input #newDay /></label>
            <button (click)="addDay(newDay.value); newDay.value=''">Add</button>    

    </div> 
  `,
  styleUrls: ['./current-agenda.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentAgendaComponent implements OnInit {

  @Input() newPlan;
  errorMessage: string;
  agenda: Observable<Agenda[]>;
  selectedDay: Agenda[] = [];
  agendas: Agenda;
  private id: number;

  constructor(private agendaService: AgendaService,
  			      private currentAgendaService: CurrentAgendaService) { }

  ngOnInit() { this.selectAgenda(); }

  selectAgenda() {
      this.agenda = this.agendaService.getAgendas();

  }

  chosenOne(day) {
      this.selectedDay = day.plans;
      if (this.newPlan !== undefined) {
            this.selectedDay.push(this.newPlan);
            this.agendaService.addAgenda(day)
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

  addDay(name) {
        let makeNew = new Agenda(this.id, name, []);
        this.agendaService.addAgendas(makeNew)
            .subscribe(agenda => this.selectedDay.push(agenda)); 
    }
}