import { Request, Response } from 'express';

import Proveedores from '../models/proveedores';

export async function dashboard(_: Request, res: Response): Promise<void> {
	const proveedor = await Proveedores.find().lean();

	res.status(200).render('proveedor/listaProveedores', { proveedor });
}

export async function nuevoProveedor(_: Request, res: Response): Promise<void> {
	res.status(200).render('proveedor/formProveedor');
}

export async function guardarProveedor(
	req: Request,
	res: Response
): Promise<void> {
	const proveedor = new Proveedores({
		...req.body,
		imagen: String(req.body.imagen) || undefined,
	});

	await proveedor.save();

	res.status(201).redirect('/proveedores');
}

export async function cargarEdicion(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	const proveedor = await Proveedores.findOne({
		_id: id,
	}).lean();

	res.status(200).render('proveedor/formProveedor', {
		proveedor,
		editar: true,
	});
}

export async function guardarEdicion(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	await Proveedores.updateOne(
		{
			_id: id,
		},
		{ ...req.body, imagen: String(req.body.imagen) || undefined }
	);

	res.status(200).redirect('/proveedores');
}

export async function eliminarProveedor(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	await Proveedores.deleteOne({
		_id: id,
	});

	res.status(200).redirect('/proveedores');
}

export async function buscarProveedor(
	req: Request,
	res: Response
): Promise<void> {
	const { nombre } = req.body;

	const proveedor = await Proveedores.find({
		nombre: {
			$regex: '.*' + nombre + '.*',
		},
	}).lean();

	res.status(200).render('proveedor/listaProveedores', { proveedor });
}
