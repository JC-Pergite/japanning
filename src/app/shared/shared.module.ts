import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgendaListComponent } from '../agenda/agenda-list.component';

@NgModule ({
	imports: [ CommonModule ], 
	exports: [ CommonModule, FormsModule ],
	// declarations: [ AgendaListComponent ]
})
export class SharedModule { }
