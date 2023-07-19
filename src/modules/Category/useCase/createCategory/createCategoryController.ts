import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./createCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const { title, owner, description } = request.body;
    await createCategoryUseCase.execute({ title, owner, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
