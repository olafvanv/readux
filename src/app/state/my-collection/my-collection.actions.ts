import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.interface';

const baseName = 'My Collection';

export const addBookToCollection = createAction(
  `[${baseName}] Add To Collection`,
  props<{ book: Book }>()
);

export const removeBookFromCollection = createAction(
  `[${baseName}] Remove From Collection`,
  props<{ book: Book }>()
);
