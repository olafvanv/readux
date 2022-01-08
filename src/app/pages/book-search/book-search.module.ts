import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { BookSearchReducer, BookSearchEffects } from '../../state/book-search';
import { BookSearchComponent } from './book-search.component';
import { EffectsModule } from '@ngrx/effects';
import { BookCardComponent } from './book-card/book-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    BookSearchComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('BookSearch', BookSearchReducer),
    EffectsModule.forFeature([BookSearchEffects]),
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class BookSearchModule { }
