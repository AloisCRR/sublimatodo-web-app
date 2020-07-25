import { Schema, model } from 'mongoose';

const Clientes = new Schema({
	nombre: {
		type: String,
		required: true,
	},
	cedula: {
		type: String,
		required: true,
	},
	direccion: {
		type: String,
		required: true,
	},
	pedidos: [{ type: Schema.Types.ObjectId, ref: 'Pedido' }],
});

export default model('Cliente', Clientes);
