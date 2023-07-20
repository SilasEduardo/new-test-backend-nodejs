import { Request, Response} from "express";
import { CreateProductUseCase } from "./createProductUseCase"


const createProductUseCase = new CreateProductUseCase()



class CreateProductController {
  handle(request: Request, response: Response){
    const {
      title,
      description,
      price, 
      category, 
      } = request.body;

    const product = createProductUseCase.execute({
        title,
        description,
        price,
        category,
      })


      response.status(201).json(product);

  };

};


export { CreateProductController }