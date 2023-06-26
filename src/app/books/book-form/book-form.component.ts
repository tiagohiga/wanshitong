import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap } from 'rxjs';

import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit{
  form = this.formBuilder.group({
    isbn: [''],
    imgLivro: [''],
    nomeLivro: [''],
    descricaoLivro: [''],
    idAutor: [''],
    idEditora: [''],
    idGenero: [''],
    qtdDisponivel: [0],
    matriculaBibliotecario: ['']
  });

  authorOptions = [];
  filteredAuthorOptions: Observable<any[]>;

  genreOptions = [];
  filteredGenreOptions: Observable<any[]>;

  publisherOptions = [];
  filteredPublisherOptions: Observable<any[]>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private booksService: BooksService,
    private snackBar: MatSnackBar,
    private location: Location){

    this.filteredAuthorOptions = this.form.controls['idAutor'].valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val =>{
        return this.filterAuthor(val || '')
      })
    )

    this.filteredGenreOptions = this.form.controls['idGenero'].valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val =>{
        return this.filterGenre(val || '')
      })
    )

    this.filteredPublisherOptions = this.form.controls['idEditora'].valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val =>{
        return this.filterPublisher(val || '')
      })
    )
  }

  filterAuthor(val: string): Observable<any[]>{
    return this.booksService.listAllAuthors().pipe(
      map(response => response.filter(option => {
        return option.nomeAutor.toLowerCase().indexOf(val.toLowerCase()) === 0
      }))
    )
  }

  filterGenre(val: string): Observable<any[]>{
    return this.booksService.listAllGenres().pipe(
      map(response => response.filter(option => {
        return option.nomeGenero.toLowerCase().indexOf(val.toLowerCase()) === 0
      }))
    )
  }

  filterPublisher(val: string): Observable<any[]>{
    return this.booksService.listAllPublishers().pipe(
      map(response => response.filter(option => {
        return option.nomeEditora.toLowerCase().indexOf(val.toLowerCase()) === 0
      }))
    )
  }

  ngOnInit(): void{

  }

  onSubmit(){
    this.booksService.save(this.form.value).subscribe(result => this.onSuccess(), error => {
      this.onError()
    });
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
