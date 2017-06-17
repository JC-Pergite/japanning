import * as mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
		 _id: Number,
		name: String,
		url: String,
		pic: String,
		description: String,
});

const Plan = mongoose.model('Plan', planSchema);

export default Plan;