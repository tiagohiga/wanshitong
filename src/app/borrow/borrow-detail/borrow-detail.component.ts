import { BookIsbn, BorrowDetail, BorrowUpdate } from './../model/borrow';
import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../services/borrow.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-borrow-detail',
  templateUrl: './borrow-detail.component.html',
  styleUrls: ['./borrow-detail.component.css'],
})
export class BorrowDetailComponent implements OnInit {
  displayedColumns = ['isbn', 'dataDevolucao'];

  checkedList: string[] = [];

  idEmprestimo = 0;
  nomeUsuario = '';
  bibliotecario = '';
  statusEmprestimo = '';
  dataEmprestimo = '';
  prazoDevolucao = '';
  livros: BookIsbn[] = [];

  livrosDevolvidos: BookIsbn[] = [];

  constructor(
    private borrowService: BorrowService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const borrow$ = this.borrowService.loadById(id);
      borrow$.subscribe((borrow) => {
        this.idEmprestimo = borrow.id;
        this.nomeUsuario = borrow.nomeUsuario;
        this.bibliotecario = borrow.bibliotecario;
        this.statusEmprestimo = borrow.statusEmprestimo;
        this.dataEmprestimo = borrow.dataEmprestimo;
        this.prazoDevolucao = borrow.prazoDevolucao;
        for (var i = 0; i < borrow.livros.length; i++) {
          if (borrow.livros[i].dataDevolucao === null) {
            this.livros.push(borrow.livros[i]);
          }else{
            this.livrosDevolvidos.push(borrow.livros[i]);
          }
        }
      });
    });
  }

  onSubmit() {
    var borrowUpdate: BorrowUpdate = {
      email: this.nomeUsuario,
      bibliotecario: environment.email,
      isbnLivros: this.checkedList
    };

    this.borrowService.update(borrowUpdate, this.idEmprestimo).subscribe(result => this.onSuccess(), error =>{
      this.onError()
    });

    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Atualização enviada com sucesso', '', {
      duration: 3000
    });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao atualizar Emprestimo', '', {
      duration: 3000
    });
  }

  onCancel() {
    this.location.back();
  }

  onCheckboxChange(option: string, event: any) {
    if (!this.checkedList.includes(option)) {
      this.checkedList.push(option);
    }else{
      this.checkedList.forEach( (item, index) =>{
        if(item === option) this.checkedList.splice(index, 1);
      })
    }
  }
}
