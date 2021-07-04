import {Router} from 'express';
import usersRouter from './users.routes';
import sessionsRoute from './sessions.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionsRoute);

export default router;