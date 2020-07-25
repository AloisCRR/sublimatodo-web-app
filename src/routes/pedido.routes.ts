import { Router } from 'express';
import * as template from '../controllers/pedido.controllers';

const router = Router();

router.route('/').get(template.dashboard);
router
	.route('/nuevo/:id')
	.get(template.nuevoPedido)
	.post(template.guardarPedido);

router.route('/delete/:id').get(template.eliminarPedido);

export default router;
