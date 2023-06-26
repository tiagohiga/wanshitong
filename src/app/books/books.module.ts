import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { SharedModule } from '../shared/shared.module';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list/books-list.component';
import { BookFormEditComponent } from './book-form-edit/book-form-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookFormComponent,
    BooksListComponent,
    BookFormEditComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
