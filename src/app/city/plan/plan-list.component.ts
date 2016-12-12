// import { Component, OnInit } from '@angular/core';
// import { Plan } from './plan';
// import { CityService } from '../city.service';

// @Component({
//   selector: 'app-plan-list',
//   // templateUrl: './plan-list.component.html',
//   template: `
//   	<div>
//       <ul>
//         <li *ngFor="let plan of plans" >
//   		  <a href="#" routerLink="{{'./' + plan.id}}">
//             {{plan.name}}
//           </a>
//         </li>
//       </ul>    
//   	</div>	 
  
//   	`
// })
// export class PlanListComponent implements OnInit {
  
// 	plans: Plan[] = [];

//   constructor(private cityService: CityService) { }

// 	ngOnInit() {
// 		this.cityService.getPlans()
// 				.subscribe(p => this.plans = p)
// 	}

// }
