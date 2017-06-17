import * as express from 'express';

import AgendaCtrl from './controllers/agenda';
import CityCtrl from './controllers/city';
import Agenda from './models/agenda';
import City from './models/city';

export default function setRoutes(app) {

  const agendaCtrl = new AgendaCtrl();
  const cityCtrl = new CityCtrl();

  // Agendas
  app.route('/api/agenda').get(agendaCtrl.getAll);
  app.route('/api/agenda').post(agendaCtrl.insert);
  app.route('/api/agenda/:id').get(agendaCtrl.get);
  app.route('/api/agenda/:id').put(agendaCtrl.update);
  app.route('/api/agenda/:id').delete(agendaCtrl.delete);

  // Cities
  app.route('/api/city').get(cityCtrl.getAll);
  app.route('/api/city/:id').get(cityCtrl.get);

  // Apply the routes to application with the prefix '/api'
  app.use('/api', router);
}