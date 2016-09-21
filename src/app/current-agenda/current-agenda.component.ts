import { Component, OnInit, EventEmitter, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CurrentAgendaService } from './current-agenda.service';
import { CityService } from '../city/city.service';
import { AgendaService } from '../agenda/agenda.service';
import { AgendaListComponent } from '../agenda/agenda-list.component';
import { Plan } from '../city/plan/plan';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'app-current-agenda',
  templateUrl: './current-agenda.component.html',
  styleUrls: ['./current-agenda.component.css'],
  providers: [ AgendaService ]
})
export class CurrentAgendaComponent implements OnChanges {

  private model = new Agenda('', []);
  private editing = false;
  errorMessage: string;
  agendas: Agenda;

  @Input() editId: string;
  @Input() listId: string;

  constructor(private agendaService: AgendaService,
  			  public currentAgendaService: CurrentAgendaService) { }

  //  ngOnInit() { this.getAgendas(); }

  // getAgendas() {
  //     this.agendas = this.agendaService.getAgendas()
  //     .subscribe(agendas => this.agendas = agendas,
  //                 error => this.errorMessage = <any>error);               
  // }

  saveAgenda() {
  	let planning:Observable<Agenda[]>;
	if(!this.editing){
    // Create a new comment
    	planning = this.agendaService.addAgenda(this.model)
	} else {
    // Update an existing comment
    	 planning = this.agendaService.updateAgenda(this.model)
  		}
    planning.subscribe(
	        agendas => {
	            // Emit list event
	            CurrentAgendaService.get(this.listId).emit(agendas);
	            // Empty model
	            this.model = new Agenda('', []);
	            // Switch editing status
	            if(this.editing) this.editing = !this.editing;
	        }, 
	        err => {
	            // Log errors if any
	            
	        });
  	}

  ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        CurrentAgendaService.get(this.editId).subscribe((agenda:Agenda) => {
            this.model = agenda;
            this.editing = true;
        });
  }	
}