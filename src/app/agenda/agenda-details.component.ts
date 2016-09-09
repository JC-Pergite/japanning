import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';

@Component({
	selector: 'app-agenda-details',
	template: ``, 

})
export class AgendaDetailsComponent implements OnInit {
	agenda: Agenda;

	constructor(private route: ActivatedRoute, private agendaService: AgendaService) { }


}
