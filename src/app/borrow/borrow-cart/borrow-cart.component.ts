import { MatTableDataSource } from '@angular/material/table';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BorrowUpdate } from '../model/borrow';
import { BorrowService } from '../services/borrow.service';

@Component({
  selector: 'app-borrow-cart',
  templateUrl: './borrow-cart.component.html',
  styleUrls: ['./borrow-cart.component.css']
})
export class BorrowCartComponent implements OnInit{
  data: string[] = [];

  public email: string = '';

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>;

  displayedColumns = ['isbn', 'actions'];

  constructor(
    private borrowService: BorrowService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.data = environment.livrosEmprestimo.filter(Boolean);
    this.updateDataSource();
    console.log(this.data)
  }

  onRemove(index: number){
    this.data.splice(index, 1);
    this.updateDataSource();
  }

  updateDataSource(){
    this.dataSource.data = this.data;
    environment.livrosEmprestimo = this.data;
  }

  onSave(){
    var borrowUpdate: BorrowUpdate = {
      email: this.email,
      bibliotecario: environment.email,
      isbnLivros: this.data
    };

    this.borrowService.save(borrowUpdate).subscribe(result => this.onSuccess(), error =>{
      this.onError()
    });

    this.location.back();
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Emprestimo com sucesso', '', {
      duration: 3000
    });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao realizar Emprestimo', '', {
      duration: 3000
    });
  }
}
