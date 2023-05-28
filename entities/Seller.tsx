import SellerCategory from "./SellerCategory";

export default class Seller {
    public id: string;
    public status: string;
    public created_at: Date;
    public modified_at: Date;
    public name: string;
    public email: string;
    public phone: string;
    public website: string;
    public facebook: string;
    public instagram: string;
    public owner_details: string;
    public category: SellerCategory;
    
    constructor(
      id: string,
      status: string,
      created_at: Date,
      modified_at: Date,
      email: string,
      name: string,
      phone: string,
      website: string,
      facebook: string,
      instagram: string,
      owner_details: string,
      category: SellerCategory
    ) {
      this.id = id;
      this.status = status;
      this.created_at = created_at;
      this.modified_at = modified_at;
      this.email = email;
      this.name = name;
      this.phone = phone;
      this.website = website;
      this.facebook = facebook;
      this.instagram = instagram;
      this.owner_details=owner_details
      this.category=category
    }
  }
  