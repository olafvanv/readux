import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCollectionComponent } from './my-collection.component';
import { StoreModule } from '@ngrx/store';
import { MyCollectionReducer } from '../../state/my-collection';
import { BookSearchModule } from '../book-search/book-search.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookCardModule } from 'src/app/shared/components/book-card/book-card.module';



@NgModule({
  declarations: [
    MyCollectionComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('MyCollection', MyCollectionReducer),
    BookSearchModule,
    MatToolbarModule,
    BookCardModule
  ]
})
export class MyCollectionModule { }
