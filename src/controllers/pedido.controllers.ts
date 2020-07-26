import { Request, Response } from 'express';

import Pedido from '../models/pedidos';
import DetallePedido from '../models/detallePedidos';
import Producto from '../models/producto';

export async function dashboard(_: Request, res: Response): Promise<void> {
	const pedidos = await Pedido.find()
		.populate({
			path: 'id_cliente',
			select: 'nombre',
		})
		.sort({ createdAt: 'desc' })
		.lean();
	res.status(200).render('pedidos/listaPedidos', { pedidos });
}

export function nuevoPedido(req: Request, res: Response): void {
	const { id } = req.params;
	res.status(200).render('pedidos/pedido', { nuevo: true, id });
}

export async function guardarPedido(
	req: Request,
	res: Response
): Promise<void> {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { descripcion } = req.body;
	const { id } = req.params;

	const nuevoPedido = new Pedido({
		descripcion: String(descripcion) || undefined,
		id_cliente: id,
	});

	await nuevoPedido.save();

	const cantPedidos = await Pedido.countDocuments({ id_cliente: id });

	await Pedido.findByIdAndUpdate(
		{ _id: String(nuevoPedido._id), id_cliente: id },
		{ nro: cantPedidos }
	);

	res.status(201).redirect('/pedidos');
}

export async function eliminarPedido(
	req: Request,
	res: Response
): Promise<void> {
	const { id } = req.params;

	await Pedido.findByIdAndDelete(id);
	await DetallePedido.deleteMany({
		id_pedido: id,
	});
	res.status(200).redirect('/pedidos');
}

export async function agregarItem(req: Request, res: Response): Promise<void> {
	const { id } = req.params;

	const productos = await Producto.find().lean();

	res.status(200).render('pedidos/detallePedido', { id, productos });
}

export async function guardarItem(req: Request, res: Response): Promise<void> {
	const { id } = req.params;

	const nuevoDetalle = new DetallePedido({
		...req.body,
		id_pedido: id,
		cantidad: parseInt(req.body.cantidad),
	});

	await nuevoDetalle.save();

	const item = await DetallePedido.findOne({
		_id: String(nuevoDetalle._id),
	})
		.populate({
			path: 'tipo',
			select: 'precio_venta descripcion',
		})
		.lean();

	await Pedido.findByIdAndUpdate(id, {
		$inc: {
			total: (item as any).tipo.precio_venta * (item as any).cantidad,
		},
	});

	res.status(201).redirect('/pedidos');
}

export async function listarItems(req: Request, res: Response): Promise<void> {
	const { id } = req.params;

	const items = await DetallePedido.find({ id_pedido: id })
		.populate({
			path: 'tipo',
			select: 'precio_venta descripcion',
		})
		.lean();

	console.log(items);

	res.status(200).render('pedidos/itemsPedido', { items });
}
