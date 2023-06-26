import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Borrow } from '../model/borrow';
import { BorrowService } from '../services/borrow.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css'],
})
export class BorrowComponent {
  borrows$: Observable<Borrow[]>;

  // displayedColumns = [
  //   'idEmprestimo',
  //   'statusEmprestimo',
  //   'dataEmprestimo',
  //   'prazoDevolucao',
  //   'actions',
  // ];

  constructor(
    private borrowEmprestimo: BorrowService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.borrows$ = this.borrowEmprestimo.listAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar emprestimos.');
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onView(borrow: Borrow){
    this.router.navigate(['view', borrow.idEmprestimo], {relativeTo: this.route});
  }

  onAdd(){
    console.log('Cart')
    this.router.navigate(['cart'], {relativeTo: this.route});
  }
}
