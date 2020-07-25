import { Schema, model } from 'mongoose';

const detallePedido = new Schema(
	{
		descripcion: {
			type: String,
			required: true,
		},
		id_cliente: {
			type: String,
			required: true,
		},
		cantidad: {
			type: Number,
			required: true,
		},
		entrega: {
			type: Date,
			required: true,
		},
		tipo: {
			type: String,
			enum: ['Camiseta', 'Taza'],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default model('DetallePedido', detallePedido);
