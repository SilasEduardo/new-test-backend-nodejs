import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.get("/", (req, res) => {
  res.send("route category");
});

export { categoryRoutes };
