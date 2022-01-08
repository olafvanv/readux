import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Book } from '../../models/book.interface';
import {
  getSearchingState,
  getSearchQuery,
  getSearchResults,
  BookSearchActions,
} from '../../state/book-search';
import { getMyBookCollection } from '../../state/my-collection';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('search') search: ElementRef;

  public query: string = '';
  public query$: Observable<string>;
  public books$: Observable<Book[]>;
  public searching$: Observable<boolean>;

  private collection: Book[] = [];
  private subs: Subscription = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.books$ = this.store.select(getSearchResults);
    this.query$ = this.store.select(getSearchQuery);
    this.searching$ = this.store.select(getSearchingState);

    this.subs.add(
      this.store.select(getMyBookCollection).subscribe((d) => {
        this.collection = d;
      })
    );
  }

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(debounceTime(600), distinctUntilChanged())
      .subscribe(() => {
        this.searchBooks(this.search.nativeElement.value);
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public isInCollection(book: Book): boolean {
    return this.collection.findIndex((b) => b.id === book.id) > -1;
  }

  private searchBooks(query: string) {
    this.store.dispatch(BookSearchActions.searchBooks({ query }));
  }
}
