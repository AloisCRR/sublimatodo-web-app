import { Schema, model } from 'mongoose';

const Empleado = new Schema(
	{
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
		puesto: {
			type: Schema.Types.ObjectId,
			ref: 'Puesto',
		},
	},
	{
		timestamps: true,
	}
);

export default model('Empleado', Empleado);
