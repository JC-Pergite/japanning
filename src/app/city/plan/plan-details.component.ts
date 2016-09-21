import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Plan } from './plan';
import { CityService } from '../city.service';

@Component({
	selector: 'app-plan-details',
	template: `<h1>{{plan.id}}, {{plan.name}}</h1>`
})
export class PlanDetailsComponent implements OnInit {

   	plan: Plan;
    private sub: any;
    id: number;

    constructor(private cityService: CityService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        // let id = Number.parseInt(this.route.snapshot.params['id'], 10);
            let id = Number.parseInt(this.route.snapshot.params['id'], 10);
            // this.cityService.getDetails(id).subscribe(p => this.plan = p);
    }
    // ngOnInit() {
    //     this.sub = this.route.params.subscribe(params => {
    //       let id = Number.parseInt(params['id']);
    //       this.cityService
    //         .get(id)
    //         .subscribe(p => this.plan = p);
    //     });
    // }

    // ngOnDestroy() {
    //     this.sub.unsubscribe();
    // }
}