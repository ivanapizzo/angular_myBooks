import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

    private url:string = "http://localhost:3000/books";

    public books:Book[];

    constructor(private http:HttpClient){

      // this.books = [

      //   new Book(40040, 1200007, "Dejar ir", "Autoayuda", "Dr. David Hawkins", 19.99, "https://imagessl4.casadellibro.com/a/l/t7/14/9788494248214.jpg"),
      //   new Book(30310, 4170002, "Los 5 niveles de apego", "Autoayuda", "Miguel Ruiz Jr", 14.99, "https://imagessl7.casadellibro.com/a/l/t7/77/9788479538477.jpg"),
      //   new Book(41000, 4000441, "Titanes", "Liderazgo", "Tim Ferriss", 23.99, "https://images.cdn2.buscalibre.com/fit-in/360x360/39/85/3985f893d89905b8495825bbfac2239b.jpg"),
      //   new Book(41009, 1000222, "Encantado de conocerme", "Autoayuda", "Borja Vilaseca", 12.99, "https://imagessl6.casadellibro.com/a/l/t7/26/9788466361026.jpg"),
      //   new Book(77007, 1340098, "El libro tibetano de los muertos", "Espiritualidad, religión", "Padma Sambhava", 16.00, "https://imagessl9.casadellibro.com/a/l/t7/19/9788472453319.jpg"),
      //   new Book(77008, 120008, "El alquimista", "Novela", "Paulo Cohelo", 9.99, "https://imagessl5.casadellibro.com/a/l/t7/55/9788408144755.jpg"),

      // ]
  }

  // getAll2():Book[] {

  //   return this.books;
  // }


  getAll():Observable<Object> {

    return this.http.get(this.url);
  }

  // getOne(id_book:number):Book[] {

  //   let getBook:Book[] = [];

  //   for(let i = 0; i < this.books.length ; i++) {
  //     if (this.books[i].id_book == id_book){
  //         getBook.push(this.books[i]);
  //     }
  //   } return getBook;
  // }

  getOne(id_book:number):Observable<Object> {

    let url = 'http://localhost:3000/?id_book=' + id_book;
    return this.http.get(url);
  }

  // add(book:Book):void {

  //   this.books.push(book);
  // }

  // POST BOOKS
  add(book:Book):Observable<Object>{

    return this.http.post(this.url, book);
  }


  // edit(book:Book):boolean {

  //     for (let i = 0; i < this.books.length; i++) {
  //       if (this.books[i].id_book == book.id_book){

  //         this.books[i] = book;
  //       }
  //     }

  //       return true;
  // }

  edit(book:Book):Observable<Object> {

    return this.http.put(this.url, book)
  }


  // Devuelve true si lo borra o false si no lo borra

  // delete(id_book:number):boolean {
  //   for(let i = 0; i < this.books.length; i++) {
  //       if (this.books[i].id_book == id_book) {
  //         this.books.splice(i, 1);
  //       }
  //   }
  //   return true;
  // }

  delete(id_book:number):Observable<Object> {

    return this.http.request('delete', this.url, {body:{id_book:id_book}});
  }


}
