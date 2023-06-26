import { BookEdit, BookSave } from './../model/book';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-form-edit',
  templateUrl: './book-form-edit.component.html',
  styleUrls: ['./book-form-edit.component.css']
})
export class BookFormEditComponent implements OnInit{

  routeIsbn = '';

  form = this.formBuilder.group({
    isbn: [''],
    imgLivro: [''],
    nomeLivro: [''],
    descricaoLivro: [''],
    qtdDisponivel: [0],
    matriculaBibliotecario: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private booksService: BooksService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute){

    }

  onSubmit(){
    this.booksService.update(this.form.value, this.routeIsbn).subscribe(result => this.onSuccess(), error => {
      this.onError()
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const isbn = params['isbn'];
      this.routeIsbn = isbn;
      const book$ = this.booksService.loadByIsbn(isbn);
      book$.subscribe(book => {
        this.form.patchValue({
          isbn: book.isbn,
          nomeLivro: book.nomeLivro,
          descricaoLivro: book.descricaoLivro,
          qtdDisponivel: book.qtdDisponivel,
          matriculaBibliotecario: book.matriculaBibliotecario
        })
      })
    })

    this.form.get('isbn')?.disable();
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Livro cadastrado com sucesso', '', {
      duration: 3000
    });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Livro', '', {
      duration: 3000
    });
  }

}
