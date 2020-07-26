import { Router } from 'express';

const router = Router();

import * as db from '../controllers/puesto.controlles';

router.route('/').get(db.dashboard);
router.route('/nuevo').get(db.nuevoPuesto).post(db.guardarPuesto);
router.route('/editar/:id').get(db.cargarEdicion).post(db.guardarEdicion);
router.route('/borrar/:id').get(db.eliminarPuesto);

export default router;
