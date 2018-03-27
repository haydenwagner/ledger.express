import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerComponent } from './ledger.component';

import { EntryComponent } from './entry/entry.component';
import { EntryInputComponent} from './entry-input/entry-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LedgerComponent,
    EntryComponent,
    EntryInputComponent
  ],
  exports: [LedgerComponent]
})
export class LedgerModule { }
