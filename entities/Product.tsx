export default class Product {
    public id!: number;
    public name: string;
    public description: string;
    public price: number;
    public sizes: string[];
    public colors: string[];
    public image1: any;
    public image2: any;
    public image3: any;
    public category: any;
    public seller: any;
    public created_at: Date;
  
    constructor(
      id: number,
      name: string,
      description: string,
      price: number,
      sizes: string[],
      colors: string[],
      image1: any,
      image2: any,
      image3: any,
      category: any,
      seller: any,
      created_at: Date
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.image1 = image1;
      this.image2 = image2;
      this.image3 = image3;
      this.sizes = sizes;
      this.category = category;
      this.created_at = created_at;
      this.seller = seller;
      this.colors = colors;
    }
  }
  