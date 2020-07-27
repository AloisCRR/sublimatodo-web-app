import { Router } from 'express';
import * as db from '../controllers/proveedor.controllers';

const router = Router();

router.route('/').get(db.dashboard);
router.route('/nuevo').get(db.nuevoProveedor).post(db.guardarProveedor);
router.route('/editar/:id').get(db.cargarEdicion).post(db.guardarEdicion);
router.route('/borrar/:id').get(db.eliminarProveedor);
router.route('/buscar').post(db.buscarProveedor);

export default router;
