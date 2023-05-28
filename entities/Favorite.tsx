import Look from "./Look";
import User from "./User";

export default class Favorite {
  public id: number;
  public created_at: Date;
  public modified_at: Date;
  public look: Look;
  public stylist: User;

  constructor(
    id: number,
    created_at: Date,
    modified_at: Date,
    stylist: User,
    look: Look
  ) {
    this.id = id;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.stylist = stylist;
    this.look = look;
  }
}
