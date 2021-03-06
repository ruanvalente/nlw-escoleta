import express from 'express';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = express.Router();

const itemsController = new ItemsController();
const pointsConroller = new PointsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsConroller.index);
routes.get('/points/:id', pointsConroller.show);
routes.post('/points', pointsConroller.create);

export default routes;
