import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LedgerModule} from './ledger/ledger.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LedgerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
