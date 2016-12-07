import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { City } from './city';
import { AgendaService } from '../agenda/agenda.service';

@Component({
	selector: 'app-city-details',
	template: `
		<h1>Matsuri</h1>
		<div>
		   <div class="panel-heading" *ngFor="let place of city">
                <h3>Plans: {{place.name}}</h3>

              <div *ngIf="place?.plans?.length > 0">
                <ul *ngFor="let event of place?.plans">
                      <a [routerLink]="['./events/', event.id]">{{event.name}}</a> 
                    <button (click)="addPlan(event)">Add</button>

                      <button (click)="deletePlan(event.id)">Delete</button>
                </ul>
              </div>
            </div>
        </div>
        <div>
        	<app-current-agenda [newPlan]="plan"></app-current-agenda>
        </div>
	`, 

})
export class CityDetailsComponent implements OnInit {

	city: City;
	plan: Array<any>;
	constructor(private route: ActivatedRoute, 
				private agendaService: AgendaService) { }

	ngOnInit() { this.getCity(); }

	getCity() {
		this.city = this.route.snapshot.data['city'];
	}

	addPlan(event) {
		this.plan = event;
		console.log(this.plan);
   }
}
