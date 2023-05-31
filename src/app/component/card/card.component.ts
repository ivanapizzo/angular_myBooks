import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book: Book;
  @Input() par: boolean;
  @Output() selectBook = new EventEmitter<number>();

  deleteBook():void{
    this.selectBook.emit(this.book.id_book);
  }
}
