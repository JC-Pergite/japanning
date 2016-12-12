import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from './plan';
import { CityService } from '../city.service';

@Component({
	selector: 'app-plan-details',
	template: `<h1>{{plan.id}}, {{plan.name}}</h1>`
})
export class PlanDetailsComponent implements OnInit {

   	plan: Plan;
    id: number;

    constructor(private cityService: CityService,
                private route: ActivatedRoute) { }

    ngOnInit() {
            let id = Number.parseInt(this.route.snapshot.params['id'], 10);
    }
}