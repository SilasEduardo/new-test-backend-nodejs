import { ICreateCategoryDTO } from "@modules/Category/dtos/ICreateCategoryDTO";
import { Category } from "@modules/Category/infra/mongodb/models/Category";

interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  findByName(title: string): Promise<Category | undefined>;
  findById(id: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
}

export { ICategoryRepository };
