import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public books: Book[];

  constructor(public BookService: BooksService, private router: Router, private UserService: UserService) {
    this.BookService.getAll().subscribe((data:Book[]) => {
      this.books = data;
      console.log(data);
    })
  }

/// putBook  

  modifyBook(id_user: number, id_book: number, title:string, type:string, author:string, price:number, photo:string) {

      let book = new Book(
        this.UserService.user.id_user,
        id_book,
        title, 
        type, 
        author, 
        price, 
        photo);

      this.BookService.edit(book).subscribe((data:Book[]) => {
        this.books = data;
        // console.log(data);
      })
      this.router.navigateByUrl('/booksPage');

  }

}


