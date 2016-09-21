import { Injectable, EventEmitter }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentAgendaService {

    private static _emitters: { [ID: string]: EventEmitter<any> } = {};
    // Set a new event in the store with a given ID
    static get(ID: string): EventEmitter<any> {
        if (!this._emitters[ID]) 
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    } 
}