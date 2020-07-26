import { Router } from 'express';
import * as template from '../controllers/pedido.controllers';

const router = Router();

router.route('/').get(template.dashboard);
router
	.route('/nuevo/:id')
	.get(template.nuevoPedido)
	.post(template.guardarPedido);

router.route('/delete/:id').get(template.eliminarPedido);
router
	.route('/detalle/:id')
	.get(template.agregarItem)
	.post(template.guardarItem);

router.route('/items/:id').get(template.listarItems);

router.route('/buscar').post(template.buscarPedidos);

export default router;
