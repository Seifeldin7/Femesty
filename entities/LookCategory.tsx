export default class LookCategory {
  public id: number;
  public status: string;
  public created_at: Date;
  public modified_at: Date;
  public name: string;
  public order: string;

  constructor(
    id: number,
    status: string,
    created_at: Date,
    modified_at: Date,
    name: string,
    order: string
  ) {
    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.name = name;
    this.order = order;
  }
}
