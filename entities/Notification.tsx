import Order from "./Order";
import Product from "./Product";
import User from "./User";

export default class Notification {
    public id: number;
    public name: string;
    public description: string;
    public created_at: Date;
    public is_read: boolean;
    public subject: Product | Order;
    public subject_type: string;
    public user: User;
    constructor(
        id: number,
        name: string,
        description: string,
        created_at: Date,
        is_read: boolean,
        subject: Product | Order,
        subject_type: string,
        user: User,
    ) {
        this.id = id,
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.is_read = is_read;
        this.subject = subject;
        this.subject_type = subject_type;
        this.user = user;
    }
}
