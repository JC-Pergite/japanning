import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Agenda } from './agenda';
import { AgendaService } from './agenda.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'kore-agenda-details',
  template: `
  <h5>hey there!</h5>
      <div class="panel-heading" *ngFor="let day of agenda">
          <h3>{{day.name}}</h3>
        <div class="media" *ngFor="let plan of day?.plans; let i = index; trackBy: trackByFn">
            <a class="media-left" href="#">
              <img class="media-object" src={{plan.pic}} width="100" alt="">
            </a>
          <div class="media-body">
            <h4 class="media-heading">{{plan.name}}</h4>
            <p>{{plan.description}}</p>
            <button type="button" class="btn btn-danger btn-xs deletion" (click)="deletePlan(day, i)">
              Delete
            </button>
          </div>
        </div>
      </div>
        `,
  styleUrls: ['../agenda/agenda-details.component.css']
})
export class AgendaDetailsComponent implements OnInit, OnDestroy {
  
  agenda;
  private alive: boolean = true;

  constructor(private route: ActivatedRoute, 
              private agendaService: AgendaService) { }

  ngOnInit() { this.getAgenda(); }

  getAgenda(): void {
      this.agenda = this.route.snapshot.data['agenda'];
    }

  deletePlan(day, index) {
      let planId = day.plans[index].id;
      for (var i = 0; i < day.plans.length; i++) {
            if ( planId === day.plans[i].id ) {
              day.plans.splice(index, 1);
            }
      }
      this.agendaService.updateAgenda(day)
          .takeWhile(() => this.alive)
          .subscribe(data => this.agenda.plans = data);
   }

  trackByFn(index, item) {
      return item.id;
  }

  ngOnDestroy() {
      this.alive = false;
   }

}