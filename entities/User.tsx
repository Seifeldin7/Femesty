export default class User {
    public id!: string;
    public email: string;
    public username: string;
    public name: string;
    public image: string;
    public description: string;
    public phone: string;
    public address: string;
    public created_at: string;
    public password_reset_pin!: string;

    constructor(email: string,
        created_at: string,
        username: string,
        name: string,
        image: string,
        description: string,
        phone: string,
        address: string) {
        this.email = email;
        this.created_at = created_at;
        this.address = address;
        this.description = description;
        this.image = image;
        this.name = name;
        this.phone = phone;
        this.username = username;
    }
}
