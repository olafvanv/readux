import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from './pages/book-search/book-search.component';
import { MyCollectionComponent } from './pages/my-collection/my-collection.component';

const routes: Routes = [
  {
    path: 'search',
    component: BookSearchComponent
  },
  {
    path: 'my-collection',
    component: MyCollectionComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
