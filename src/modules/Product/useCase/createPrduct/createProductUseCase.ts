import {ProductRepository} from '../../infra/in-memoria/ProductRepository'
import { Product } from '@modules/Product/infra/mongodb/models/Product';
const productRepository = new ProductRepository()


class CreateProductUseCase {


  execute({title, description, price, category,}: Product) {

   const produts = productRepository.create({
      title,
      description,
      price, 
      category
    });

    return produts
    
  }

}


export { CreateProductUseCase } 

