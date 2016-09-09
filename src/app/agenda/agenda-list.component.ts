import { Component, OnInit } from '@angular/core';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agenda-list',
  template: ``,
})
export class AgendaListComponent implements OnInit {

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {

  }

}
