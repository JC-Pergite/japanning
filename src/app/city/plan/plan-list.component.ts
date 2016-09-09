import { Component, OnInit } from '@angular/core';
import { Plan } from './plan';
import { CityService } from '../city.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
})
export class PlanListComponent implements OnInit {
  
	private plans: Plan[] = [];

  	constructor(private cityService: CityService) { }

	ngOnInit() {
		this._cityService.getPlans()
				.subscribe(p => this.plans = p)
	}

}
