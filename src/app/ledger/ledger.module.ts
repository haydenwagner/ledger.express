import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerComponent } from './ledger.component';

import { EntryComponent } from './entry/entry.component';
import { EntryElementComponent} from './entry-element/entry-element.component';
import { NewEntryInputComponent} from './new-entry-input/new-entry-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LedgerComponent,
    EntryComponent,
    EntryElementComponent,
    NewEntryInputComponent
  ],
  exports: [LedgerComponent]
})
export class LedgerModule { }
