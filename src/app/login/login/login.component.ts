import { UserLogin } from './../model/UserLogin';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoLogin } from '../model/UserInfoLogin';
import { LoginService } from '../services/login.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  userLogin: UserInfoLogin = new UserInfoLogin();

  login: UserLogin = new UserLogin();
  constructor(
    public loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Digite seu e-mail';
    }

    return this.email.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  onSignin(){
    this.router.navigate(['signin'], {relativeTo: this.route})
  }

  onEntrar(){
    this.loginService.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      environment.token = resp.token;
      environment.email = resp.email;
      environment.funcao = resp.funcao;
      environment.nome = resp.nome;

      this.router.navigate(['/books']);
    }, erro => {
      if(erro.status == 500 || erro.status == 403){
        alert("Usuário ou Senha estão errados")
      }
    })
  }
}

