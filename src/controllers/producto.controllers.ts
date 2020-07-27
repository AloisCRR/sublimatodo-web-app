import { Request, Response } from 'express';

import Producto from '../models/producto';

export async function dashboard(_: Request, res: Response): Promise<void> {
	const productos = await Producto.find()
		.populate({
			path: 'proveedor',
			select: 'nombre',
		})
		.lean();

	res.status(200).render('productos/listaProductos', { productos });
}

export async function nuevoProducto(
	req: Request,
	res: Response
): Promise<void> {
	const { proveedor } = req.params;

	const nuevoProducto = new Producto({
		...req.body,
		imagen: String(req.body.imagen) || undefined,
		proveedor,
	});

	await nuevoProducto.save();

	res.status(201).redirect('/productos');
}

export async function borrarProducto(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	await Producto.findByIdAndDelete(id);

	res.status(200).redirect('/productos');
}

export async function editarProducto(
	req: Request,
	res: Response
): Promise<void> {
	const { id, proveedor } = req.params;

	const producto = await Producto.findOne({
		_id: String(id),
	}).lean();

	res.status(200).render('productos/nuevoProducto', {
		producto,
		editar: true,
		proveedor,
	});
}

export async function guardarProducto(
	req: Request,
	res: Response
): Promise<void> {
	const { id, proveedor } = req.params;

	await Producto.findByIdAndUpdate(id, { ...req.body, proveedor });

	res.status(200).redirect('/productos');
}
