import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Agenda } from './agenda';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'kore-agenda-list',
  template: `
  <div class="container">
    <div class="row stylish-panel" *ngFor="let agenda of agendas | async">
      <div [hidden]="agenda.hideMe" class="col-md-3">
        <div class="modal fade" id="modalConfirm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Confirm Deletion</h4>
              </div>
              <div class="modal-body">
                <p>Konnichiwa! Are you sure you wanna delete an entire day? </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Nope</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" data-target="#myConfirm" 
                  (click)="agenda.hideMe = !agenda.hideMe">Yup!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flexx flex-grow">
          <h2 id="myConfirm">{{agenda.name}}</h2>
          <ul *ngFor="let plan of agenda?.plans">
            <li>{{plan.name}}</li>
          </ul>
        </div>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalConfirm"
            (click)="deleteAgenda(agenda.id)">Delete
        </button>
        <a [routerLink]="['./' + agenda.id]" class="btn btn-primary" title="See more">View »</a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {

  hideMe: {};
  agendas: Observable<Agenda>;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() { this.getAgendas(); }

  getAgendas(): void { 
    this.agendas = this.agendaService.getAgendas();
  }

  deleteAgenda(day) {
    console.log("disappear");
    this.agendaService.removeAgenda(day);
  }
}