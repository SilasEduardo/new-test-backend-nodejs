import {v4 as uuidv4} from "uuid"


class Product {
  id_owner?: string;
  title: string;
  description: string;
  price: number;
  category: string; 

  constructor(){
    if(!this.id_owner){
      this.id_owner = uuidv4();
    }
  }
}

export { Product }