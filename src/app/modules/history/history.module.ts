import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryFiltersComponent } from './components/history-filters/history-filters.component';
import { HistoryMainComponent } from './components/history-main/history-main.component';
import {HistoryRoutingModule} from "./history-routing.module";

@NgModule({
  declarations: [
    HistoryFiltersComponent,
    HistoryMainComponent
  ],
  exports: [
    HistoryFiltersComponent,
    HistoryMainComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
