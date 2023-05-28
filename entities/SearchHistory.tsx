import User from "./User";

export default class SearchHistory {
  public id: string;
  public status: string;
  public created_at: Date;
  public modified_at: Date;
  public description: string;
  public user: User;

  constructor(
    id: string,
    status: string,
    created_at: Date,
    modified_at: Date,
    description: string,
    user: User
  ) {
    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.description = description;
    this.user = user;
  }
}
