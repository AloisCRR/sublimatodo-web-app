import { Schema, model } from 'mongoose';

const Proveedor = new Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
		direccion: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			default: 'Sin email',
		},
		contacto: {
			type: String,
			required: true,
		},
		imagen: {
			type: String,
			default:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png',
		},
	},
	{
		timestamps: true,
	}
);

export default model('Proveedor', Proveedor);
