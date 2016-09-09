import { Component, OnInit } from '@angular/core';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
  }

}
