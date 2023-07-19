import { v4 as uuidv4 } from "uuid";

class Category {
  id?: string;
  title: string;
  owner: string;
  description: string;
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
