import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { empty, from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books.service';
import * as BookSearchActions from './book-search.actions';

@Injectable()
export class BookSearchEffects {
  constructor(private actions$: Actions, private booksService: BooksService) {}

  searchBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookSearchActions.searchBooks),
      switchMap((a) => {
        if (a.query === '') {
          return of([]).pipe(
            map(() => BookSearchActions.searchBooksComplete({ books: [] }))
          );
        }
        return this.booksService
          .searchBooks(a.query)
          .pipe(
            map((books) => BookSearchActions.searchBooksComplete({ books })),
            catchError((err) => of(BookSearchActions.searchBooksFailed({error: err})))
          );
      })
    );
  });
}
