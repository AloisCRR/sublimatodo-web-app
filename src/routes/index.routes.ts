import { Router } from 'express';
import * as template from '../controllers/index.controllers';

const router = Router();

router.route('/').get(template.home);

export default router;
