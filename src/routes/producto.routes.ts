import { Router, Request, Response } from 'express';
import * as db from '../controllers/producto.controllers';

const router = Router();

router.route('/').get(db.dashboard);

router
	.route('/nuevo')
	.get((_: Request, res: Response) => {
		res.status(200).render('productos/nuevoProducto');
	})
	.post(db.nuevoProducto);

router.route('/borrar/:id').get(db.borrarProducto);
router.route('/editar/:id').get(db.editarProducto).post(db.guardarProducto);

export default router;