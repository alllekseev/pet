import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';
import { TicketPurchaseComponent } from './components/ticket-purchase/ticket-purchase.component';
import { TicketTariffsComponent } from './components/ticket-tariffs/ticket-tariffs.component';
import { TicketContainerComponent } from './components/ticket-container/ticket-container.component';
import {SharedModule} from "../shared/shared.module";
import {CurrentTicketRoutingModule} from "./current-ticket-routing.module";

@NgModule({
  declarations: [
    TicketInfoComponent,
    TicketPurchaseComponent,
    TicketTariffsComponent,
    TicketContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CurrentTicketRoutingModule
  ]
})
export class CurrentTicketModule { }
