import { Injectable } from '@angular/core';
import { Agenda } from './agenda';
import { Plan } from '../city/plan/plan';

@Injectable()
export class AgendaService {

	private agendas: Agenda[] = [
		new Agenda(1, 'DayOne', [])
	];

	constructor(){};

	getAgendas() {
		return this.agendas;
	}

	getAgenda(id: number | string) {
    	console.log(this.agendas[id]);
    	return this.agendas[id]
  }
}