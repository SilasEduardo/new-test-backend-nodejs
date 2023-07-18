import { Router } from "express";

const productRoutes = Router();

productRoutes.get("/", (req, res) => {
  res.send("product ok");
});

export { productRoutes };
