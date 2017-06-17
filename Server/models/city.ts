import * as mongoose from 'mongoose';
import { Plan } from './plan';

const citySchema = new mongoose.Schema({
		 _id: Number,
		name: String,
		url: String,
		pic: String,
		description: String,
		plans: Plan[]
});

const City = mongoose.model('City', citySchema);

export default City;