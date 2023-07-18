import { Router } from "express";

import { categoryRoutes } from "./categoryRoutes";
import { productRoutes } from "./productRoutes";

const router = Router();

router.use("/category", categoryRoutes);
router.use("/product", productRoutes);

export { router };
