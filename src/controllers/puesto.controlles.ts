import { Request, Response } from 'express';

import Puesto from '../models/puesto';

export async function dashboard(_: Request, res: Response): Promise<void> {
	const puestos = await Puesto.find().lean();

	res.status(200).render('puestos/listaPuestos', { puestos });
}

export async function nuevoPuesto(_: Request, res: Response): Promise<void> {
	res.status(200).render('puestos/puestosForm');
}

export async function guardarPuesto(
	req: Request,
	res: Response
): Promise<void> {
	const nuevoPuesto = new Puesto({
		...req.body,
	});

	await nuevoPuesto.save();

	res.status(200).redirect('/puestos');
}

export async function cargarEdicion(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	const puesto = await Puesto.findById(id).lean();

	res.status(200).render('puestos/puestosForm', { puesto, editar: true });
}

export async function guardarEdicion(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	await Puesto.findByIdAndUpdate(id, { ...req.body });

	res.status(200).redirect('/puestos');
}

export async function eliminarPuesto(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	await Puesto.deleteOne({
		_id: id,
	});

	res.status(200).redirect('/puestos');
}
