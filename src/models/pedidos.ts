import { Schema, model } from 'mongoose';

const Pedido = new Schema(
	{
		descripcion: {
			type: String,
			default: 'Sin descripción',
		},
		id_cliente: {
			type: Schema.Types.ObjectId,
			ref: 'Cliente',
		},
		cantidad: {
			type: Number,
		},
		total: {
			type: Number,
			default: 0,
		},
		nro: {
			type: Number,
			default: 0,
		},
		//items: [{ type: Schema.Types.ObjectId, ref: 'DetallePedido' }],
	},
	{
		timestamps: true,
	}
);

export default model('Pedido', Pedido);
