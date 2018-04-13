import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Entry} from '../../models/entry.model';
import {LedgerElement} from '../../models/ledger-element.model';
import {LedgerElementType} from '../../enums/ledger-element-type.enum';
import {EntryMode} from '../../enums/entry-mode.enum';


@Component({
  selector: '[app-entry-input]',
  templateUrl: './entry-input.component.html',
  styleUrls: ['./entry-input.component.html']
})
export class EntryInputComponent implements OnInit {
  @Input() elements: LedgerElement[];
  @Input() index: number;
  @Output() addEntryAction = new EventEmitter<string>();

  LedgerElementType: typeof LedgerElementType = LedgerElementType;
  EntryMode: typeof EntryMode = EntryMode;

  constructor() {}

  ngOnInit() {}

  addEntry(event) {
    this.addEntryAction.emit(event);
  }
}
