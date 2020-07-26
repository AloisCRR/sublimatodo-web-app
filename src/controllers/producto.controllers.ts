import { Request, Response } from 'express';

import Producto from '../models/producto';

export async function dashboard(_: Request, res: Response): Promise<void> {
	const productos = await Producto.find().lean();

	res.status(200).render('productos/listaProductos', { productos });
}

export async function nuevoProducto(
	req: Request,
	res: Response
): Promise<void> {
	const nuevoProducto = new Producto({ ...req.body });

	nuevoProducto.save();

	res.status(201).redirect('/productos');
}
