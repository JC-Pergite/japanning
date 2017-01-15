import { Plan } from '../city/plan/plan';

export class Agenda {
	
	constructor(
		public id: number,
		public name: string, 
		public description: string,
		public url: string,
		public pic: string,
		public plans: Plan[]) {}
}