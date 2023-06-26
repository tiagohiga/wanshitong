

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookFormEditComponent } from './book-form-edit/book-form-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  {path: '', component: BooksComponent  },
  {path: 'new', component: BookFormComponent},
  {path: 'edit/:isbn', component: BookFormEditComponent},
  {path: 'view/:isbn', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
