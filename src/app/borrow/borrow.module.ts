import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowRoutingModule } from './borrow-routing.module';
import { BorrowComponent } from './borrow/borrow.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { BorrowsListComponent } from './borrows-list/borrows-list.component';
import { BorrowDetailComponent } from './borrow-detail/borrow-detail.component';
import { BorrowCartComponent } from './borrow-cart/borrow-cart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BorrowComponent,
    BorrowsListComponent,
    BorrowDetailComponent,
    BorrowCartComponent
  ],
  imports: [
    CommonModule,
    BorrowRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class BorrowModule { }
