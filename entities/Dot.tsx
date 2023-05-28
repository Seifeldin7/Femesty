import Look from "./Look";
import Product from "./Product";

export default class Dot {
  public id: number;
  public status: string;
  public created_at: Date;
  public modified_at: Date;
  public media1Dot: string;
  public media2Dot: string;
  public media3Dot: string;
  public media4Dot: string;
  public product: Product;
  public Look: Look;

  constructor(
    id: number,
    status: string,
    created_at: Date,
    modified_at: Date,
    media1Dot: string,
    media2Dot: string,
    media3Dot: string,
    media4Dot: string,
    product: Product,
    Look: Look
  ) {
    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.media1Dot = media1Dot;
    this.media2Dot = media2Dot;
    this.media3Dot = media3Dot;
    this.media4Dot = media4Dot;
    this.product = product;
    this.Look = Look;
  }
}
