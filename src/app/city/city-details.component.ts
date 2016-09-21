import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { City } from './city';
import { CityService } from './city.service';

@Component({
	selector: 'app-city-details',
	template: `
		<h1>Matsuri</h1>
	`, 

})
export class CityDetailsComponent implements OnInit {

	city: City;
	id: number;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		let id = Number.parseInt(this.route.snapshot.params['id'], 10);
	};

}
