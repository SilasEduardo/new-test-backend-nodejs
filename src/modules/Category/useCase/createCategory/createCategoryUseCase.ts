import { ICreateCategoryDTO } from "@modules/Category/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/Category/infra/ICategoryRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({
    title,
    owner,
    description,
  }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExist = await this.categoryRepository.findByName(
      title
    );
    if (categoryAlreadyExist) {
      throw new AppError("Category already exists");
    }
    this.categoryRepository.create({
      title,
      owner,
      description,
    });
  }
}

export { CreateCategoryUseCase };
