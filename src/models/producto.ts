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
		imagen: {
			type: String,
			default:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png',
		},
		proveedor: {
			type: Schema.Types.ObjectId,
			ref: 'Proveedor',
		},
	},
	{
		timestamps: true,
	}
);

export default model('Producto', Producto);
