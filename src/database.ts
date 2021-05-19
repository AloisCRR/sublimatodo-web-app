import mongoose from 'mongoose';

export async function connect(): Promise<void> {
	try {
		await mongoose.connect('mongodb://localhost:27017/sublimatodo', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
			connectTimeoutMS: 5000,
		});
		return;
	} catch (error) {
		throw new Error(error);
	}
}
