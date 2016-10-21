import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';


@Component({
	selector: 'kore-agenda-details',
	template: `
		<div class="panel panel-default">
            <div class="panel-heading">{{agenda?.name}}</div>
            <div class="panel-body">
                <ul>
                    <li *ngFor="let plan of agenda?.plans">
                {{plan.name}} {{plan.description}}
                    </li>
                </ul>
            </div>
         <div class="panel-footer">
                <button class="btn btn-info" (click)="editComment($event)"><span class="glyphicon glyphicon-edit"></span>Edit</button>
                <button class="btn btn-danger" (click)="deletePlan(agenda?.plans['id'])"><span class="glyphicon glyphicon-remove"></span>Delete</button>
            </div>
            
        `, 

})
export class AgendaDetailsComponent implements OnInit {
    // @Input('agenda') agenda: Agenda;
    agenda;
	@Input() listId: string;
	@Input() editId: string;
    //output
   // private sub: any;
	constructor(private route: ActivatedRoute, 
				private agendaService: AgendaService,
				private currentAgendaService: CurrentAgendaService) { }

	ngOnInit() {
		this.agenda = this.route.snapshot.data['agenda']
                    // .subscribe(agendas.find((agenda) => agenda.id == id))

        console.log(this.agenda);
	}
// ngOnInit() {
//           let id = Number.parseInt(this.route.snapshot.params['id']);
//           this.agenda = this.agendaService
//             .getAgenda(id)
//             console.log(this.agenda);
//        ;
//     }
	editAgenda() {
        // Emit edit event
        CurrentAgendaService.get(this.editId).emit(this.agenda);
    }

    deletePlan(id:string) {
        this.agendaService.removePlan(this.agenda.id)
    }
}