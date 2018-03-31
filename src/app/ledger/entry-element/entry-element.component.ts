import { Component, Input, OnInit} from '@angular/core';
import { LedgerElementType} from '../../enums/ledger-element-type.enum';
import {EntryMode} from '../../enums/entry-mode.enum';

@Component({
  selector: 'app-entry-element',
  templateUrl: './entry-element.component.html',
  styleUrls: ['./entry-element.component.scss']
})
export class EntryElementComponent implements OnInit {
  @Input() element;
  @Input() viewMode: EntryMode;
  LedgerElementType: typeof LedgerElementType = LedgerElementType;
  EntryMode: typeof EntryMode = EntryMode;
  elementType: LedgerElementType;

  constructor() {}

  ngOnInit() {
     this.elementType = this.element.type;
  }

  dateChanged(event) {
    console.log(event);
  }
}
