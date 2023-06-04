import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public books: Book[];
  
  constructor(public booksService: BooksService, private router: Router){
    this.books = this.booksService.getAll();
  }

  

    addBook(id_user:number, id_book:number, title:string, type:string, author:string, price:number, photo:string):void {

      this.booksService.add(new Book(id_book, id_user, title, type, author, price, photo));
      this.router.navigateByUrl('/booksPage');
  }

}



