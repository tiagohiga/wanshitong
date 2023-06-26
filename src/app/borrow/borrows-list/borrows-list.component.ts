import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Borrow } from '../model/borrow';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-borrows-list',
  templateUrl: './borrows-list.component.html',
  styleUrls: ['./borrows-list.component.css']
})
export class BorrowsListComponent implements OnInit{
  @Input() borrows: Borrow[] = [];
  @Output() view = new EventEmitter(false);
  @Output() add = new EventEmitter(false);

  displayedColumns = ['idEmprestimo', 'statusEmprestimo', 'dataEmprestimo', 'prazoDevolucao', 'actions'];

  // displayedColumns = ['idEmprestimo', 'statusEmprestimo', 'dataEmprestimo', 'prazoDevolucao'];


  dataSource: MatTableDataSource<Borrow> = new MatTableDataSource<Borrow>();

  ngOnInit(): void {
    this.dataSource.data = this.borrows;
  }

  onAdd() {
    this.add.emit(true);
  }

  onView(borrow: Borrow){
    this.view.emit(borrow)
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
