export class Book {

    public id_user: number;
    public id_book: number;
    public title: string;
    public type: string;
    public author: string;
    public price: number;
    public photo: string;

    constructor (id_user:number, id_book:number, title:string, type:string, author: string, price:number, photo:string) {

        this.id_user = id_user;
        this.id_book = id_book;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
}


