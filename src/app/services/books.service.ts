import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<Book[]> {
    const url = `${this.API_PATH}?q=intitle:${query}&key=${environment.apiKey}`;
    return this.http.get<IQueryResponse>(url).pipe(
      map((d) => {
        if (d.totalItems === 0) {
          return [];
        }
        return d.items;
      })
    );
  }
}

interface IQueryResponse {
  items: Book[];
  kind: string;
  totalItems: number;
}
