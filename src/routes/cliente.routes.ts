import { Router, Request, Response } from 'express';
import * as db from '../controllers/cliente.controllers';

const router = Router();

router
	.route('/nuevo')
	.get((_: Request, res: Response) => {
		res.status(200).render('clientes/clienteForm', { nuevo: true });
	})
	.post(db.nuevoCliente);

router.route('/').get(db.listarClientes);
router.route('/delete/:id').get(db.borrarCliente);
router.route('/edit/:id').get(db.listarCliente).post(db.editarCliente);
router.route('/buscar').post(db.buscarCliente);

export default router;
