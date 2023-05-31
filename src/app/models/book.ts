export class Book {

    id_user: number;
    id_book: number;
    title: string;
    type: string;
    author: string;
    price: number;
    photo: string;

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


