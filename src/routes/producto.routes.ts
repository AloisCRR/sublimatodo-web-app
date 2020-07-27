import { Router, Request, Response } from 'express';
import * as db from '../controllers/producto.controllers';

const router = Router();

router.route('/').get(db.dashboard);

router
	.route('/nuevo/:proveedor')
	.get((req: Request, res: Response) => {
		const { proveedor } = req.params;
		res.status(200).render('productos/nuevoProducto', { proveedor });
	})
	.post(db.nuevoProducto);

router.route('/borrar/:id').get(db.borrarProducto);
router
	.route('/editar/:id/:proveedor')
	.get(db.editarProducto)
	.post(db.guardarProducto);

router.route('/_').get(db.dashboardBasic);

export default router;
