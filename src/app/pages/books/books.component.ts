import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];
  
  constructor(public booksService:BooksService){
    this.books = this.booksService.getAll();


  }

  deleteBook(selectBook:number):void {
    this.booksService.delete(selectBook);
    this.books = this.booksService.getAll();

  }

  searchingBook(id_book:number): void {

    if(id_book){
      this.books = this.booksService.getOne(id_book);
      } else {
        this.books = this.booksService.getAll();
      }
      
  }

}
