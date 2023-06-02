import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

    public books:Book[];

    constructor(){

      this.books = [

        new Book(40040, 1200007, "Dejar ir", "Autoayuda", "Dr. David Hawkins", 19.99, "https://imagessl4.casadellibro.com/a/l/t7/14/9788494248214.jpg"),
        new Book(3031, 4170002, "Los 5 niveles de apego", "Autoayuda", "Miguel Ruiz Jr", 14.99, "https://imagessl7.casadellibro.com/a/l/t7/77/9788479538477.jpg"),
        new Book(4100, 4000441, "Titanes", "Liderazgo", "Tim Ferriss", 23.99, "https://images.cdn2.buscalibre.com/fit-in/360x360/39/85/3985f893d89905b8495825bbfac2239b.jpg"),
        new Book(4109, 1000222, "Encantado de conocerme", "Autoayuda", "Borja Vilaseca", 12.99, "https://imagessl6.casadellibro.com/a/l/t7/26/9788466361026.jpg"),

      ]
  }

  getAll():Book[] {

    return this.books;
  }

  getOne(id_book:number):Book[] {

    let getBook:Book[] = [];

    for(let i = 0; i < this.books.length ; i++) {
      if (this.books[i].id_book == id_book){
          getBook.push(this.books[i]);
      }
    } return getBook;
  }


  add(book:Book):void {

    this.books.push(book);
  }


  // Devuelve true o false si consegui editar el libro 


      // let result: boolean;
      // let edit: boolean = true;

  edit(book:Book):boolean {

      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].id_book == book.id_book){

          this.books[i] = book;
        }
      }

        return true;
  }


  // Devuelve true si lo borra o false si no lo borra

  delete(id_book:number):boolean {
    for(let i = 0; i < this.books.length; i++) {
        if (this.books[i].id_book == id_book) {
          this.books.splice(i, 1);
        }
    }
    return true;
  }


}
