import {RouterModule, Routes} from "@angular/router";
import {TicketContainerComponent} from "./components/ticket-container/ticket-container.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: TicketContainerComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentTicketRoutingModule {
}
