import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  hide = true;

  user: User = new User();

  confirmacaoSenha: string = '';

  constructor(
    public loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location
  ){

  }
  ngOnInit(): void {
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

  onCadastrar(){
    if(this.user.senhaUsuario !== this.confirmacaoSenha || !this.user.senhaUsuario){
      this.onError('As senhas devem ser iguais');
    }else if(!this.user.nomeUsuario || !this.user.emailUsuario){
      this.onError('O nome do usuário e e-mail não pode estar vazios');
    }else{
      this.loginService.cadastrar(this.user).subscribe(result => this.onSuccess(), error => {
        this.onError('Erro ao cadastrar Usuário')
      });
    }
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Usuário cadastrado com sucesso', '', {
      duration: 3000
    });
    this.onCancel();
  }

  private onError(msg: string){
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}
