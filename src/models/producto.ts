import { Schema, model } from 'mongoose';

const Producto = new Schema(
	{
		descripcion: {
			type: String,
			required: true,
		},
		cantidad: {
			type: Number,
			required: true,
		},
		costo: {
			type: Number,
			required: true,
		},
		precio_venta: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default model('Producto', Producto);
