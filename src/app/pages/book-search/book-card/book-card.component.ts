import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/models/book.interface';
import {
  getMyBookCollection,
  MyCollectionActions,
} from '../../../state/my-collection';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnDestroy {
  @Input() book: Book;

  private subs: Subscription = new Subscription();
  private collection: Book[] = [];

  constructor(private store: Store) {
    this.subs.add(
      this.store
        .select(getMyBookCollection)
        .subscribe((res) => (this.collection = res))
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

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

  get inCollection(): boolean {
    return this.collection.findIndex(f => f.id === this.book.id) > -1;
  }

  public toggleBook() {
    if (this.inCollection) {
      this.store.dispatch(
        MyCollectionActions.removeBookFromCollection({ book: this.book })
      );
    } else {
      this.store.dispatch(
        MyCollectionActions.addBookToCollection({ book: this.book })
      );
    }
  }
}
