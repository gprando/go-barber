import { Router } from 'express';
import appointmentsRouter from './_appointments.routes';
import usersRouter from './_users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
