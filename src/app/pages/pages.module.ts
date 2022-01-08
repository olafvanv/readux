import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BottomBarModule } from '../shared/components/bottom-bar';
import { BookSearchModule } from './book-search/book-search.module';
import { MyCollectionModule } from './my-collection/my-collection.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    BottomBarModule,
    BookSearchModule,
    MyCollectionModule,
  ],
  exports: [
    PagesComponent,
    BookSearchModule,
    MyCollectionModule,
  ]
})
export class PagesModule { }
