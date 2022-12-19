import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: 'current-ticket',
    loadChildren: () => import('./modules/current-ticket/current-ticket.module').then(m => m.CurrentTicketModule)
  },
  {path: '**', pathMatch: "full", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
