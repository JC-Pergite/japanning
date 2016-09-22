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
                <button class="btn btn-info" (click)="editComment()"><span class="glyphicon glyphicon-edit"></span>Edit</button>
                <button class="btn btn-danger" (click)="deletePlan(agenda?.plans['id'])"><span class="glyphicon glyphicon-remove"></span>Delete</button>
            </div>
            
        `, 

})
export class AgendaDetailsComponent {
    @Input() agenda: Agenda;
	@Input() listId: string;
	@Input() editId: string;

	constructor(private route: ActivatedRoute, 
				private agendaService: AgendaService,
				private currentAgendaService: CurrentAgendaService) { }

	// ngOnInit() {
	// 	let id = Number.parseInt(this.route.snapshot.params['id'], 10);
 //        console.log(this.agenda);
	// }

	editAgenda() {
        // Emit edit event
        CurrentAgendaService.get(this.editId).emit(this.agenda);
    }

    deletePlan(id:string) {
        // Call removeComment() from CommentService to delete comment
        this.agendaService.removePlan(id).subscribe(
                                agendas => {
                                    // Emit list event
                                    CurrentAgendaService.get(this.listId).emit(agendas);
                                }, 
                                err => {
                                    // Log errors if any
                                });
    }
}