import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryContainerComponent } from './modules/history/components/history-container/history-container.component';
import {SharedModule} from "./modules/shared/shared.module";
import {HistoryModule} from "./modules/history/history.module";

@NgModule({
  declarations: [
    AppComponent,
    HistoryContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
