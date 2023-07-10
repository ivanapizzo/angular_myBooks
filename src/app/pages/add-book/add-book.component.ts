import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public books: Book[];
  
  constructor(public booksService: BooksService, private router: Router, public UserService:UserService){
    this.booksService.getAll().subscribe((data:Book[]) => {
      this.books = data;
      console.log(data);
    })
  }

  /// asignación = !!!!!!! this.books = data, le asignamos data a los books

  //// postBooks

    addBook(id_user:number, id_book:number, title:string, type:string, author:string, price:number, photo:string):void {

      let book = new Book(
              this.UserService.user.id_user, 
              id_book,
              title, 
              type, 
              author, 
              price, 
              photo);

      this.booksService.add(book).subscribe((data:Book[])=> {
        this.books = data;
        console.log(data);
        this.router.navigateByUrl('/booksPage');
      })
  }

}



