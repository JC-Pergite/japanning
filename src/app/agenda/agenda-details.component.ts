import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Agenda } from './agenda.ts';
import { AgendaService } from './agenda.service';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';


@Component({
	selector: 'app-agenda-details',
	template: `
		<div class="panel panel-default">
            <div class="panel-heading">{{agenda?.name}}</div>
            <div class="panel-body">
                {{agenda?.plans}}
            </div>
            <div class="panel-footer">
                <button class="btn btn-info" (click)="editComment()"><span class="glyphicon glyphicon-edit"></span></button>
                <button class="btn btn-danger" (click)="deletePlan(plan.id)"><span class="glyphicon glyphicon-remove"></span></button>
            </div>
        </div>	`, 

})
export class AgendaDetailsComponent implements OnInit {

	@Input() agenda: Agenda;
	@Input() listId: string;
	@Input() editId: string;

	// agenda: Agenda;
	id: number;

	constructor(private route: ActivatedRoute, 
				private agendaService: AgendaService,
				private currentAgendaService: CurrentAgendaService) { }

	ngOnInit() {
		let id = Number.parseInt(this.route.snapshot.params['id'], 10);
	}

	editAgenda() {
        // Emit edit event
        CurrentAgendaService.get(this.editId).emit(this.agenda);
    }

    deletePlan(id) {
        // Call removeComment() from CommentService to delete comment
        this.agendaService.removePlan(id).subscribe(
                                agendas => {
                                    // Emit list event
                                    CurrentAgendaService.get(this.listId).emit(agendas);
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
}