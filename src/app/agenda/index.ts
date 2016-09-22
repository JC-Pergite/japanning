import { Component} from '@angular/core';
import { CurrentAgendaService } from '../current-agenda/current-agenda.service';
import { AgendaListComponent } from './agenda-list.component';
import { CurrentAgendaComponent } from '../current-agenda/current-agenda.component';

@Component({
    selector: 'journey-widget',
    template: `
        <div>
            <current-agenda [listId]="listId" [editId]="editId"></current-agenda>
            <agenda-list [listId]="listId" [editId]="editId"></agenda-list>
        </div>
    `,
    directives: [AgendaListComponent, CurrentAgendaComponent],
    providers: [CurrentAgendaService]
})
export class JourneyComponent { 
    // Event tracking properties
    private listId = 'COMMENT_COMPONENT_LIST';
    private editId = 'COMMENT_COMPONENT_EDIT';
 }