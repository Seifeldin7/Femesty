import User from "./User";

export default class Notification {
  public id: string;
  public status: string;
  public created_at: Date;
  public modified_at: Date;
  public name: string;
  public description: string;
  public subject_type: string;
  public isread: number;
  public user: User;
  public subject_id: number;

  constructor(
    id: string,
    status: string,
    created_at: Date,
    modified_at: Date,
    name: string,
    description: string,
    subject_type: string,
    isread: number,
    user: User,
    subject_id: number
  ) {
    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.name = name;
    this.description = description;
    this.subject_type = subject_type;
    this.isread = isread;
    this.user = user;
    this.subject_id = subject_id;
  }