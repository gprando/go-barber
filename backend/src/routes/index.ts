import { Router } from 'express';
import appointmentsRouter from './_appointments.routes';
import usersRouter from './_users.routes';
import sessionsRouter from './_sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
