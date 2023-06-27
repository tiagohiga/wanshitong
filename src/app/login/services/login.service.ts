import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfoLogin } from '../model/UserInfoLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL: string = environment.baseUrl;

  private readonly API_AUTH = 'v1/auth/autenticar'

  private readonly API_REGISTER = 'v1/auth/registrar'

  constructor(private httpClient: HttpClient) { }

  entrar(userinfoLogin : UserInfoLogin): Observable<UserLogin>{
    return this.httpClient.post<UserLogin>(`${this.BASE_URL}` + this.API_AUTH, userinfoLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.BASE_URL}` + this.API_REGISTER, user)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
