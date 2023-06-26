import { Book } from './../model/book';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books$: Observable<Book[]>;

  displayedColumns = ['isbn', 'nomeLivro', 'nomeAutor', 'nomeEditora', 'qtdDisponivel', 'actions'];

  // booksService: BooksService;

  constructor(
    private booksService: BooksService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.books = [];
    // this.booksService = new BooksService();
    this.books$ = this.booksService.listAll().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );
  }

  onError(errorMessage: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(book: Book){
    this.router.navigate(['edit', book.isbn], {relativeTo: this.route});
  }

  onView(book: Book){
    this.router.navigate(['view', book.isbn], {relativeTo: this.route});
  }
}
