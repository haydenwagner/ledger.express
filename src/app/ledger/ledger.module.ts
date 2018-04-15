import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerComponent } from './ledger.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng4-validators';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryComponent } from './entry/entry.component';
import { EntryInputComponent} from './entry-input/entry-input.component';
import { EntryActionsComponent} from './entry-actions/entry-actions.component';
import { EntryElementComponent } from './entry-element/entry-element.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';

import { OcticonDirective } from '../octicon.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    OcticonDirective,
    LedgerComponent,
    EntryListComponent,
    EntryComponent,
    EntryInputComponent,
    EntryActionsComponent,
    EntryElementComponent,
    EntryDetailComponent
  ],
  exports: [
    LedgerComponent,
  ],
  providers: []
})
export class LedgerModule { }
