import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HistoryContainerComponent} from "./components/history-container/history-container.component";

const routes: Routes = [
  {path: '', component: HistoryContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
