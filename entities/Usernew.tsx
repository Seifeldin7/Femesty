export default class User {
  public id: string;
  public status: string;
  public created_at: Date;
  public modified_at: Date;
  public roles: string;
  public is_verified: number;
  public auth_token: string;
  public token_expires_at: Date;
  public login_with: string;
  public login_from: string;
  public push_notification: string;
  public image: string;
  public email: string;
  public username: string;
  public name: string;
  public phone: string;
  public address: string;
  public description: string;
  public website: string;
  public facebook: string;
  public instagram: string;
  public tiktok: string;
  public snapchat: string;

  constructor(
    id: string,
    status: string,
    created_at: Date,
    modified_at: Date,
    roles: string,
    is_verified: number,
    auth_token: string,
    token_expires_at: Date,
    login_with: string,
    login_from: string,
    push_notification: string,
    image: string,
    email: string,
    username: string,
    name: string,
    phone: string,
    address: string,
    description: string,
    website: string,
    facebook: string,
    instagram: string,
    tiktok: string,
    snapchat: string
  ) {
    this.id = id;
    this.status = status;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.roles = roles;
    this.is_verified = is_verified;
    this.auth_token = auth_token;
    this.token_expires_at = token_expires_at;
    this.login_with = login_with;
    this.login_from = login_from;
    this.push_notification = push_notification;
    this.image = image;
    this.email = email;
    this.username = username;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.description = description;
    this.website = website;
    this.facebook = facebook;
    this.instagram = instagram;
    this.tiktok = tiktok;
    this.snapchat = snapchat;
  }
}
