import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { City } from './city';
import { AgendaService } from '../agenda/agenda.service';
import { CurrentAgendaComponent } from '../current-agenda/current-agenda.component';

@Component({
	selector: 'app-city-details',
	template: `
		<div>
		   <div class="panel-heading" *ngFor="let place of city">
         <h1 class="neon">{{place.name}}</h1>
         <div>
           <div class="list-group planList" *ngFor="let event of place?.plans">
              <button type="button" class="list-group-item" (click)="showDetails(event)">
                {{event.name}}
              </button> 
           </div>
           <div *ngIf="notYet" class="cityVid">
             <iframe class="embed-responsive-item preview" id="#frame"
                [src]="place.url | safety" allowfullscreen>
             </iframe>
           </div>
           <div *ngIf="planClicked" class="contenido">
             <h3>{{event.name}}</h3>
             <div>
               <button type="button" class="btn btn-success btn-large addEvent" (click)="getPlan(event)">
                  Add Plan!
               </button>
               <div *ngIf="currently.noDay" class="noDay alert alert-danger alert-dismissible" role="alert">
                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                 </button>
                  <strong>Woops!</strong> Please create or select a day first.
               </div>
             </div>
        	   <div class="describe">
        	     <p>{{event.description}}</p>
        	   </div>
        	   <div class="foto">
        	     <img src={{event.pic}} width="333" height="333" class="img-responsive" alt="Responsive image">
        	   </div>
             <div class="embed-responsive embed-responsive-4by3 eventVid">
               <iframe class="embed-responsive-item" 
                 [src]="event.url | safety" allowfullscreen>
               </iframe>
             </div>
          </div>		
        </div>
       </div>
      <app-current-agenda #currently></app-current-agenda>
    </div> 
	`,
	styleUrls: ['./city-details.component.css'] 
})
export class CityDetailsComponent implements OnInit {

  @Input() plan;  
  @Output() onAdded = new EventEmitter();
  @ViewChild(CurrentAgendaComponent)
  private current: CurrentAgendaComponent;

	city: City;
  planClicked = false;
  notYet = true;
  event;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() { this.getCity(); }

	getCity() {
		this.city = this.route.snapshot.data['city'];
	}

  showDetails(cosa) {
    this.notYet = false;
    this.planClicked = true;
    this.event = cosa;

  }

	getPlan(newPlan) {
    this.current.addPlan(newPlan);
    this.onAdded.emit(newPlan);
    this.plan = this.event;
  }

}