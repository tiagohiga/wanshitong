import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BooksService } from '../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  nomeLivro = '';
  isbnLivro = '';
  nomeAutor = '';
  nomeEditora = '';
  nomeGenero = '';
  qtd = 0;
  descricaoLivro = '';

  constructor(
    private booksService: BooksService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const isbn = params['isbn'];
      const book$ = this.booksService.loadDetailByIsbn(isbn);
      book$.subscribe(book => {
        this.isbnLivro = book.isbn;
        this.nomeLivro = book.nomeLivro;
        this.nomeAutor = book.idAutor.nomeAutor;
        this.nomeEditora = book.idEditora.nomeEditora;
        this.nomeGenero = book.idGenero.nomeGenero;
        this.qtd = book.qtdDisponivel;
        this.descricaoLivro = book.descricaoLivro;
      })
    })
  }

  onSubmit(){
    if(environment.livrosEmprestimo.length <= 3 &&
       !environment.livrosEmprestimo.includes(this.isbnLivro)){
        console.log('Ok')
        environment.livrosEmprestimo.push(this.isbnLivro)
      }
  }

  onCancel(){
    this.location.back();
  }
}
