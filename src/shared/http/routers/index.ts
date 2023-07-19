import { Router } from "express";

import { categoriesRoutes } from "./categoryRoutes";


const router = Router();

router.use("/category", categoriesRoutes);


export { router };
