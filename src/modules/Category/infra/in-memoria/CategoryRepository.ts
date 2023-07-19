import { ICreateCategoryDTO } from "@modules/Category/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/Category/infra/ICategoryRepository";
import { v4 as uuidv4 } from "uuid";

import { Category } from "../mongodb/models/Category";

class CategoryRepository implements ICategoryRepository {
  categories: Category[] = [];

  async findById(id: string): Promise<Category | undefined> {
    return this.categories.find((item) => item.id === id);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async findByName(title: string): Promise<Category | undefined> {
    return this.categories.find((item) => item.title === title);
  }

  async create(data: ICreateCategoryDTO): Promise<void> {
    const category = new Category();
    Object.assign(category, {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      owner: data.owner,
      
    });

    this.categories.push(category);
  }
}

export { CategoryRepository };
