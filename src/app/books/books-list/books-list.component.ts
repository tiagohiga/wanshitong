import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit{
  @Input() books: Book[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() view = new EventEmitter(false);

  displayedColumns = ['isbn', 'nomeLivro', 'nomeAutor', 'nomeEditora', 'qtdDisponivel', 'actions'];

  dataSource: MatTableDataSource<Book> = new MatTableDataSource<Book>();

  constructor() {
  }
  ngOnInit(): void {
    this.dataSource.data = this.books;
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(book: Book){
    this.edit.emit(book);
  }

  onView(book: Book){
    this.view.emit(book)
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
