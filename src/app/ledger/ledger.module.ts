import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerComponent } from './ledger.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng4-validators';

import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryComponent } from './entry/entry.component';
import { EntryInputComponent} from './entry-input/entry-input.component';
import { EntryActionsComponent} from './entry-actions/entry-actions.component';
import { EntryElementComponent } from './entry-element/entry-element.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';


import {DrawerService, DrawerModule, DateTimeModule, DateTimeComponent} from '@swimlane/ngx-ui';


@NgModule({
  imports: [
    CommonModule,
    DrawerModule,
    DateTimeModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  declarations: [
    LedgerComponent,
    EntryListComponent,
    EntryComponent,
    EntryInputComponent,
    EntryActionsComponent,
    EntryElementComponent,
    EntryDetailComponent
  ],
  exports: [LedgerComponent, DateTimeComponent],
  providers: [DrawerService]
})
export class LedgerModule { }
