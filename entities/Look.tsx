import LookCategory from "./LookCategory";
import User from "./User";

export default class Look {
  public id: number;
  public status: string;
  public created_at: Date;
  public modified_at: Date;
  public name: string;
  public description: string;
  public category: LookCategory;
  public stylist: User;
  public media1: string;
  public media2: string;
  public media3: string;
  public media4: string;
  public dots: any[];
  constructor(
    id: number,
    status: string,
    created_at: Date,
    modified_at: Date,
    name: string,
    description: string,
    category: LookCategory,
    stylist: User,
    media1: string,
    media2: string,
    media3: string,
    media4: string,
    dots: any[]
  ) {
    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.name = name;
    this.description = description;
    this.category = category;
    this.stylist = stylist;
    this.media1 = media1;
    this.media2 = media2;
    this.media3 = media3;
    this.media4 = media4;
    this.dots = dots;
  }
}
