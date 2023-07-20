import { Product } from '../mongodb/models/Product'



class ProductRepository { 
  product: Product[] = []
   constructor(){
      this.product = []
   } 
  create({ title, description, price, category, }: Product){
    const product = new Product()
    Object.assign(product, {
        title,
        description,
        price,
        category
    })

    this.product.push(product)
    return product
  }

}

export { ProductRepository }