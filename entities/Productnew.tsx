import ProductCategory from "./ProductCategory";
import Seller from "./Seller";

export default class Product {
  public id: number;
  public status: string;
  public created_at: Date;
  public modified_at: Date;
  public name: string;
  public description: string;
  public price: number;
  public sizes: string[];
  public colors: string[];
  public image1: any;
  public image2: any;
  public image3: any;
  public category: ProductCategory;
  public seller: Seller;

  constructor(
    id: number,
    status: string,
    created_at: Date,
    modified_at: Date,
    name: string,
    description: string,
    price: number,
    sizes: string[],
    colors: string[],
    image1: any,
    image2: any,
    image3: any,
    category: ProductCategory,
    seller: Seller,
  ) {
    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.sizes = sizes;
    this.category = category;
    this.seller = seller;
    this.colors = colors;
  }
}
