import { Plan } from '../city/plan/plan';

export class Agenda {
	
	constructor(
		public name: string, 
		public plans: Plan[]) {}
}

// export class Agenda {
	
// 	constructor(
// 		public id: number,
// 		public name: string) {}
// }