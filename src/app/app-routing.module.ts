import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( l => l.LoginModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then( b => b.BooksModule)
  },
  {
    path: 'borrow',
    loadChildren: () => import('./borrow/borrow.module').then( c => c.BorrowModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( p => p.UserProfileModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
