import User from "./User";

export default class Message {
  public id: number;
  public created_at: string;
  public modified_at: string;
  public user: User;
  public description: string;
  constructor(
    id: number,
    created_at: string,
    modified_at: string,
    user: User,
    description: string
  ) {
    this.id = id;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.user = user;
    this.description = description;
  }
}
