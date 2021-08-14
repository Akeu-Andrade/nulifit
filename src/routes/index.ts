import {Router} from 'express';
import usersRouter from './users.routes';
import sessionsRoute from './sessions.routes';
import measuressRouter from './measuress.routes';
import datasheetsRouter from './datasheets.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionsRoute);
router.use('/datasheets', datasheetsRouter);
router.use('/measuress', measuressRouter);

export default router;