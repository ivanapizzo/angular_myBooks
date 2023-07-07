export class User {

    public id_user: number;
    public name: string;
    public first_last_name: string;
    public email: string;
    public password: string;
    public photo: string;

    constructor(id_user: number, name: string, first_last_name: string, email: string, password: string, photo: string = "/assets/img/yellowPerson4.png"){

        this.id_user = id_user;
        this.name = name;
        this.first_last_name = first_last_name;
        this.email = email;
        this.password = password;
        this.photo = photo;
    }
}


