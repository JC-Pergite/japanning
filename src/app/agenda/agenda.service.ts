import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Agenda } from './agenda';
import { Plan } from '../city/plan/plan';

@Injectable()
export class AgendaService {

	private agendas: Agenda[] = [
		new Agenda(1, 'DayOne', [new Plan(2, 'Pontocho', 'Tiny alley; traditional eats')])
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