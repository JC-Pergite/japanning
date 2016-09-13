import { Plan } from './plan/plan';

export class City {
	constructor(
		public id: number,
		public name: string,
		public plans: Plan[]) {}
}