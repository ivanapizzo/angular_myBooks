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

// agregar slide para  corregir deleteBook para que el libro se elimine al instante. Ahora se elimina solo si cambiamos de pagina primero OK

  deleteBook(id_book:number):void {

    this.booksService.delete(id_book).subscribe((data:any) => {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].id_book == id_book){
          this.books.splice(i,1);
        }
      }
      console.log(data);
    });
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


  /// SEEEARRRCHINNNNNG 

  // searchingBook(id_book:number): void {

  //   if(id_book){

  //         this.booksService.getOne(id_book).subscribe((data:Book[]) =>{
  //           this.books = data
  //           console.log(data);
  //         })
  //       } else {
  //         this.booksService.getAll().subscribe((data:Book[]) => {
  //           this.books = data;
  //           console.log(data)
  //         })
  //       }

  //     }
  


    //// asignacion = !! if(id_book) solo pasando parametro que voy a usar
  //// 


  searchingBook(id_book:number):void {

    if(id_book != 0){
        this.booksService.getOne(id_book).subscribe((data:any) =>{
                this.books = data.data;
                console.log(data)
              })
        }
        else {
          this.booksService.getAll().subscribe((data:any) => {
            this.books = data.data;
            console.log(data)
          })
          }
  
    }
}