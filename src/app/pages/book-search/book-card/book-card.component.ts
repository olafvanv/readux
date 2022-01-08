import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/book.interface';
import { MyCollectionActions } from '../../../state/my-collection';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book: Book;

  constructor(private store: Store) {}

  get title(): string {
    return this.book.volumeInfo.title;
  }

  get authors(): string[] {
    return this.book.volumeInfo.authors;
  }

  get description(): string {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | null {
    if (!this.book.volumeInfo.imageLinks) return null;

    return this.book.volumeInfo.imageLinks.smallThumbnail;
  }

  get isInCollection(): boolean {
    if(!this.book) return false;

    return true;
  }

  public toggleBook() {
    if(this.book.inCollection) {
      this.store.dispatch(MyCollectionActions.removeBookFromCollection({ book: this.book }));
    } else{
      this.store.dispatch(MyCollectionActions.addBookToCollection({ book: this.book }));
    }
  }
}
