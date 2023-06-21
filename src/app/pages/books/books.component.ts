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

  public books: Book[] = [];
  
  constructor(public booksService:BooksService){
    this.booksService.getAll().subscribe((respuesta: any) =>{
      this.getAll()
    })
  }


  //   getAll():Book[] {

  //   return this.books;
  // }


  getAll() {

    this.booksService.getAll().subscribe((data:Book[]) =>{
      this.books = data;
      console.log(data);
    })
  }


  deleteBook(selectBook:number):void {
    
    this.booksService.delete(selectBook).subscribe((data:any) => {
      if (data) {
        this.booksService.getAll().subscribe((data:any) =>{
          this.books = data;
          console.log(data);
        });
      }
    })

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

