import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowComponent } from './borrow/borrow.component';
import { BorrowDetailComponent } from './borrow-detail/borrow-detail.component';
import { BorrowCartComponent } from './borrow-cart/borrow-cart.component';

const routes: Routes = [
  {path: '', component: BorrowComponent},
  {path: 'view/:id', component: BorrowDetailComponent},
  {path: 'cart', component: BorrowCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowRoutingModule { }
