import { Component, Input, OnInit} from '@angular/core';
import { LedgerElementType} from '../../enums/ledger-element-type.enum';
import {EntryMode} from '../../enums/entry-mode.enum';

@Component({
  selector: 'app-entry-element',
  templateUrl: './entry-element.component.html',
  styleUrls: ['./entry-element.component.scss']
})
export class EntryElementComponent implements OnInit {
  @Input() elementType: LedgerElementType;
  @Input() elementValue;
  @Input() elementName: string; //todo be more specific with type
  @Input() editMode: EntryMode;
  LedgerElementType: typeof LedgerElementType = LedgerElementType;
  EntryMode: typeof EntryMode = EntryMode;

  constructor() {}

  ngOnInit() {
  }

  dateChanged(event) {
    console.log(event);
  }
}
