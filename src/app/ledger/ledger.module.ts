import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerComponent } from './ledger.component';

import {FormsModule} from '@angular/forms';

import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryComponent } from './entry/entry.component';
import { EntryElementComponent } from './entry-element/entry-element.component';
import { NewEntryInputComponent } from './new-entry-input/new-entry-input.component';


import {DrawerService, DrawerModule, DateTimeModule, DateTimeComponent} from '@swimlane/ngx-ui';


@NgModule({
  imports: [
    CommonModule,
    DrawerModule,
    DateTimeModule,
    FormsModule
  ],
  declarations: [
    LedgerComponent,
    EntryListComponent,
    EntryComponent,
    EntryElementComponent,
    NewEntryInputComponent
  ],
  exports: [LedgerComponent, DateTimeComponent],
  providers: [DrawerService]
})
export class LedgerModule { }
