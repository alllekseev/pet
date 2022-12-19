import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginatorComponent } from './components/paginator/paginator.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginatorComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
