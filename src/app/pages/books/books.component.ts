import { Component } from '@angular/core';
import { Response } from 'express';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[] = [];
  
  constructor(public booksService:BooksService, public userService: UserService){
    this.booksService.getAll().subscribe((data: any) =>{
      this.getAll()
    })
  }


    getAll2():Book[] {

    return this.books;
  }


  getAll() {

    this.booksService.getAll().subscribe((data:Book[]) =>{
      this.books = data;
      console.log(data);
    })
  }

// corregir deleteBook para que el libro se elimine al instante. Ahora se elimina solo si cambiamos de pagina primero

  deleteBook(id_book:number):void {

    this.booksService.delete(id_book).subscribe((data:any) => {
      // if (data) {
      //   this.booksService.getAll().subscribe((data:Book[]) =>{
      //     this.books = data;
          console.log(data);
        });
      // }
    }
  //   )

  // }


  searchingBook(id_book:number): void {

    if(id_book){

          this.booksService.getOne(id_book).subscribe((data:Book[]) =>{
            this.books = data
            console.log(data);
          })
        } else {
          this.booksService.getAll().subscribe((data:Book[]) => {
            this.books = data;
            console.log(data)
          })
        }

      }
  }


    //// asignacion = !! if(id_book) solo pasando parametro que voy a usar
  //// 

  // searchingBook2(id_book:number): void {

  //   if(id_book){
  //     this.books = this.booksService.getOne(id_book);
  //     this.booksService.getOne(id_book).subscribe((data:Book[]) =>{
  //       this.books = data
  //       console.log(data);
  //     });
  //     } else {
  //       this.booksService.getAll().subscribe((data:Book[]) =>{
  //         this.books = data
  //         console.log(data);
  //       });
  //     }
      
  // }