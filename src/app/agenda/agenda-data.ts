import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AgendaData implements InMemoryDbService {
  createDb() {
    let agendas = [
      { id: '0', name: 'DayOne', plans: [ {id: 0, name: 'Akihabara', description: 'cool'},
                                        {id: 1, name: 'Shinjuku', description: 'bars'} ] },
	  { id: 1, name: 'DayTwo', plans: [{id: 0, name: 'Shibuya', description: 'lights'}] } 
    ]; 
	let cities = [
	  { id: 0, name: 'Tokyo', plans: [{id: 0, name: 'Akihabara', description: 'Otaku & cosplayer haven'}] },
	  { id: 1, name: 'Kyoto', plans: [{id: 0, name: 'Shibuya', description: 'lights'}] } 
    ];
    return { agendas, cities };
  }
}
