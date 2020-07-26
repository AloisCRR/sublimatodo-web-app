import { Router } from 'express';
import * as db from '../controllers/empleado.controllers';

const router = Router();

router.route('/').get(db.dashboard);
router.route('/nuevo').get(db.nuevoEmpleado).post(db.guardarEmpleado);
router.route('/editar/:id').get(db.cargarEdicion).post(db.guardarEdicion);
router.route('/borrar/:id').get(db.eliminarEmpleado);
router.route('/buscar').post(db.buscarEmpleado);

export default router;
