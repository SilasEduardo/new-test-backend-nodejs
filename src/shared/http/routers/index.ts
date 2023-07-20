import { Router } from "express";

import { categoriesRoutes } from "./categoryRoutes";
import { productsRoutes } from "./productRouters"


const router = Router();

router.use("/category", categoriesRoutes);
router.use("/product", productsRoutes);


export { router };
