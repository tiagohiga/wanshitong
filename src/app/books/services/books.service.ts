import { Injectable } from '@angular/core';
import { Author, Book, BookDetail, BookEdit, BookSave, Genre, Publisher } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly API = 'v1/livro';

  private readonly API_ISBN = 'v1/livro/isbn';

  private readonly API_EDIT = 'v1/livro/edit';

  private readonly API_PUBLISHER = 'v1/editora/all';

  private readonly API_AUTHOR = 'v1/autor/all';

  private readonly API_GENRE = 'v1/genero/all';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Book[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      // tap(livros => console.log(livros))
    );
  }

  listAllGenres(){
    return this.httpClient.get<Genre[]>(this.API_GENRE)
    .pipe(
      first(),
      // delay(5000),
      // tap(livros => console.log(livros))
    );
  }

  listAllPublishers(){
    return this.httpClient.get<Publisher[]>(this.API_PUBLISHER)
    .pipe(
      first(),
      // delay(5000),
      // tap(livros => console.log(livros))
    );
  }

  listAllAuthors(){
    return this.httpClient.get<Author[]>(this.API_AUTHOR)
    .pipe(
      first(),
      // delay(5000),
      // tap(livros => console.log(livros))
    );
  }

  save(record: Partial<BookSave>){
    return this.httpClient.post<BookSave>(this.API, record);
  }

  loadByIsbn(isbn: string){
    return this.httpClient.get<BookEdit>(`${this.API_ISBN}/${isbn}`);
  }

  update(record: Partial<BookEdit>, isbn: string){
    return this.httpClient.put<BookEdit>(`${this.API_EDIT}/${isbn}`, record);
  }

  loadDetailByIsbn(isbn: string){
    return this.httpClient.get<BookDetail>(`${this.API_ISBN}/${isbn}`);
  }
}
