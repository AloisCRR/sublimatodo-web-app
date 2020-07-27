import { Router } from 'express';
import * as db from '../controllers/administrador.controllers';

const router = Router();

router.route('/login').get(db.login);
router.route('/').get(db.dashboard);

export default router;
