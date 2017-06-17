import * as mongoose from 'mongoose';
import { Plan } from './plan';

const agendaSchema = new mongoose.Schema({
		_id: Number,
		name: String,
		url: String,
		pic: String,
		description: String,
		plans: Plan[]
});

const Agenda = mongoose.model('Agenda', agendaSchema);

export default Agenda;