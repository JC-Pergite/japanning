import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AgendaData implements InMemoryDbService {
  createDb() {
    let agendas = [
      { id: '0', name: 'DayOne', plans: [{id: '1', name: 'Akihabara', description: 'cool'}] },
	  { id: '1', name: 'DayTwo', plans: [{id: '0', name: 'Shibuya', description: 'lights'}] } 
    ];
    return {agendas};
  }
}
