import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import {NgFor, AsyncPipe} from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AsyncPipe,
    NgFor,
    FormsModule

  ],
  exports:[
    ErrorDialogComponent,
    CategoryPipe,
    AsyncPipe,
    NgFor
  ]
})
export class SharedModule { }
