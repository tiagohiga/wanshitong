import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Borrow, BorrowDetail, BorrowUpdate } from '../model/borrow';
import { Observable, first, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  private readonly API = 'v1/emprestimos';

  private readonly API_ID = 'v1/emprestimos/emprestimo';

  private readonly API_EDIT = 'v1/emprestimos/baixar'

  constructor(private httpClient: HttpClient) { }
  BASE_URL: string = environment.baseUrl;

  listAll() {
    return this.httpClient.get<Borrow[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      // tap(borrows => console.log(borrows))
    );
  }

  loadById(id: number): Observable<BorrowDetail>{
    return this.httpClient.get<BorrowDetail>(`${this.BASE_URL}` + `${this.API_ID}/${id}`);
  }

  update(record: BorrowUpdate, id: number){
    return this.httpClient.put<BorrowUpdate>(`${this.BASE_URL}` + `${this.API_EDIT}/${id}`, record);
  }

  save(record: BorrowUpdate){
    return this.httpClient.post<BorrowUpdate>(`${this.BASE_URL}` + this.API, record);
  }
}
