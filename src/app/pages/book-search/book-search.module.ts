import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { BookSearchReducer, BookSearchEffects } from '../../state/book-search';
import { BookSearchComponent } from './book-search.component';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookCardModule } from 'src/app/shared/components/book-card/book-card.module';


@NgModule({
  declarations: [
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('BookSearch', BookSearchReducer),
    EffectsModule.forFeature([BookSearchEffects]),
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BookCardModule
  ]
})
export class BookSearchModule { }
