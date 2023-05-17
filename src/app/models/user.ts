export class User {

    public id_user: number;
    public name: string;
    public first_last_name: string;
    public email: string;
    public photo: string;
    public password: string;

    constructor(id_user: number, name: string, first_last_name: string, email: string, photo: string, password: string){

        this.id_user = id_user;
        this.name = name;
        this.first_last_name = first_last_name;
        this.email = email;
        this.photo = photo;
        this.password = password;
    }
}


