import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap/modal';

@NgModule ({
	imports: [ CommonModule, FormsModule, ModalModule.forRoot() ], 
	exports: [ CommonModule, FormsModule, ModalModule ]
})
export class SharedModule { }
