import { Schema, model } from 'mongoose';

const Puesto = new Schema(
	{
		descripcion: {
			type: String,
			required: true,
		},
		pagoHora: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default model('Puesto', Puesto);
