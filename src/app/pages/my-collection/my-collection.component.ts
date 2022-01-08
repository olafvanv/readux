import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.interface';
import { getMyBookCollection } from '../../state/my-collection';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(
    private store: Store
  ) {
    this.books$ = this.store.select(getMyBookCollection)
  }

  ngOnInit(): void {
  }

}
