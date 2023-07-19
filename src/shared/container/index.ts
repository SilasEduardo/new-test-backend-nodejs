import { ICategoryRepository } from "@modules/Category/infra/ICategoryRepository";
import { CategoryRepository } from "@modules/Category/infra/in-memoria/CategoryRepository";
import { container } from "tsyringe";


container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
 