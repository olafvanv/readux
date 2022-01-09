import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { BookCardComponent } from "./book-card.component";
import { MatIconModule } from '@angular/material/icon/'

@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class BookCardModule {}
