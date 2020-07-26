import { Schema, model } from 'mongoose';

const detallePedido = new Schema(
	{
		descripcion: {
			type: String,
			required: true,
		},
		id_pedido: {
			type: Schema.Types.ObjectId,
			ref: 'Pedido',
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
			type: Schema.Types.ObjectId,
			ref: 'Producto',
		},
	},
	{
		timestamps: true,
	}
);

export default model('DetallePedido', detallePedido);
