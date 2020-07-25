import mongoose from 'mongoose';

export async function connect(): Promise<void> {
	try {
		mongoose.connect('mongodb://localhost:27017/sublimatodo', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
		return;
	} catch (error) {
		console.error(error);
		return;
	}
}
