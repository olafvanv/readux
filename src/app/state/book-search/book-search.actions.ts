import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/book.interface";

const baseName = 'Book Search';

export const searchBooks = createAction(
  `[${baseName}] Search Books`,
  props<{query: string}>()
);

export const searchBooksComplete = createAction(
  `[${baseName}] Seach Books Complete`,
  props<{books: Book[]}>()
);

export const searchBooksFailed = createAction(
  `[${baseName}] Seach Books Failed`,
  props<{error: string}>()
);
