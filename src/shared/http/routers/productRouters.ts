import { Router } from "express";
import { CreateProductController } from '@modules/Product/useCase/createPrduct/createProductController';

const createProductController = new CreateProductController()
const productsRoutes = Router();

productsRoutes.post("/", createProductController.handle)
export { productsRoutes }




