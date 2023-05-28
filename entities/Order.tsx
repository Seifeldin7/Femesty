import Product from "./Product";

export default class Order {
    public  id!: number;
    public  status: string;
    public  price: number;
    public  shipping_price: number;
    public  created_at: Date;
    public  color: string;
    public  size: string;
    public  order_number: number;
    public  product: Product
    constructor(
        id: number,
        price: number,
        shipping_price: number,
        created_at: Date,
        color: string,
        size: string,
        order_number: number,
        status: string,
        product: Product
        ) {

        this.id = id,
        this.shipping_price = shipping_price;
        this.price = price;
        this.created_at = created_at;
        this.color = color;
        this.size = size;
        this.order_number = order_number;
        this.status = status;
        this.product = product;
    }
}