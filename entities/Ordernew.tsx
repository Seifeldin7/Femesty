import Product from "./Product";
import Seller from "./Seller";
import User from "./User";

export default class Order {
  public id: number;
  public status: string;
  public created_at: Date;
  public modified_at: Date;
  public order_number: number;
  public price: number;
  public shipping_price: number;
  public color: string;
  public size: string;
  public product: Product;
  public buyer: User;
  public seller: Seller;
  constructor(
    id: number,
    status: string,
    created_at: Date,
    modified_at: Date,
    order_number: number,
    price: number,
    shipping_price: number,
    color: string,
    size: string,
    product: Product,
    buyer: User,
    seller: Seller
  ) {
    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.order_number = order_number;
    this.price = price;
    this.shipping_price = shipping_price;
    this.color = color;
    this.size = size;
    this.product = product;
    this.buyer = buyer;
    this.seller = seller;
  }
}
