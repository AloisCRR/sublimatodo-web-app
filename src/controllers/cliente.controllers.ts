import { Request, Response } from 'express';
import Cliente from '../models/clientes';

export async function listarClientes(_: Request, res: Response): Promise<void> {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const clientes = await Cliente.find({}).lean();
	res.render('clientes/clientesLista', { clientes });
}

export async function nuevoCliente(req: Request, res: Response): Promise<void> {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { nombre, cedula, direccion } = req.body;

	const nCliente = new Cliente({ nombre, cedula, direccion });
	await nCliente.save();

	res.redirect('/clientes');
}

export async function listarCliente(
	req: Request,
	res: Response
): Promise<void> {
	const cliente = await Cliente.findById(req.params.id).lean();
	res.status(200).render('clientes/clienteForm', { cliente });
}

export async function editarCliente(
	req: Request,
	res: Response
): Promise<void> {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { nombre, cedula, direccion } = req.body;
	await Cliente.findByIdAndUpdate(req.params.id, {
		nombre,
		cedula,
		direccion,
	});
	res.status(200).redirect('/clientes');
}

export async function buscarCliente(
	req: Request,
	res: Response
): Promise<void> {
	const clientes = await Cliente.find({
		cedula: {
			$regex: '.*' + req.body.cedula + '.*',
		},
	})
		.lean()
		.exec();
	res.render('clientes/clientesLista', { clientes });
}

export async function borrarCliente(
	req: Request,
	res: Response
): Promise<void> {
	await Cliente.findByIdAndDelete(req.params.id);
	res.status(200).redirect('/clientes');
}
