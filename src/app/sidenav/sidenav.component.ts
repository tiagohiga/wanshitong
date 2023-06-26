import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from '../login/services/login.service';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  nomeUsuario: string = '';

  constructor(
    private observer: BreakpointObserver,
    public loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute ){
      this.nomeUsuario = environment.nome;
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) =>{
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  onSair(){
    environment.token = '';
    this.router.navigate(['login']);
  }
}
