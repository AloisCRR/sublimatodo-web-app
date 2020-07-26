import { Request, Response } from 'express';

import Empleado from '../models/empleado';
import Puestos from '../models/puesto';

export async function dashboard(_: Request, res: Response): Promise<void> {
	const empleados = await Empleado.find()
		.populate({
			path: 'puesto',
			select: 'descripcion',
		})
		.lean();

	res.status(200).render('empleado/listaEmpleados', { empleados });
}

export async function nuevoEmpleado(_: Request, res: Response): Promise<void> {
	const puestos = await Puestos.find().lean();

	res.status(200).render('empleado/formEmpleado', { puestos });
}

export async function guardarEmpleado(
	req: Request,
	res: Response
): Promise<void> {
	const empleado = new Empleado({ ...req.body });

	await empleado.save();

	res.status(201).redirect('/empleados');
}

export async function cargarEdicion(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	const empleado = await Empleado.findOne({
		_id: id,
	}).lean();

	const puestos = await Puestos.find().lean();

	res.status(200).render('empleado/formEmpleado', {
		empleado,
		editar: true,
		puestos,
	});
}

export async function guardarEdicion(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	await Empleado.updateOne(
		{
			_id: id,
		},
		{ ...req.body }
	);

	res.status(200).redirect('/empleados');
}

export async function eliminarEmpleado(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	await Empleado.deleteOne({
		_id: id,
	});

	res.status(200).redirect('/empleados');
}

export async function buscarEmpleado(
	req: Request,
	res: Response
): Promise<void> {
	const { cedula } = req.body;

	const empleados = await Empleado.find({
		cedula: {
			$regex: '.*' + cedula + '.*',
		},
	})
		.populate({
			path: 'puesto',
			select: 'descripcion',
		})
		.lean();

	res.status(200).render('empleado/listaEmpleados', { empleados });
}
