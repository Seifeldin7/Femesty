export default class ProductCategory {
    public id: number;
    public status: string;
    public created_at: Date;
    public modified_at: Date;
    public name: string;
    public order_num: string;
  
    constructor(
      id: number,
      status: string,
      created_at: Date,
      modified_at: Date,
      name: string,
      order_num: string
    ) {
      this.id = id;
      this.status = status;
      this.created_at = created_at;
      this.modified_at = modified_at;
      this.name = name;
      this.order_num = order_num;
    }
  }
  