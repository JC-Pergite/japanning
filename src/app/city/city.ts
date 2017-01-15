import { Plan } from './plan';

export class City {
	constructor(
		public id: number,
		public name: string,
		public description: string,
		public url: string,
		public pic: string,
		public plans: Plan[]) {}
}