import { Component, OnInit} from '@angular/core';
import { LedgerElementType } from '../../enums/ledger-element-type.enum';

@Component({
  selector: 'app-entry-element',
  templateUrl: './entry-element.component.html',
  styleUrls: ['./entry-element.component.css']
})
export class EntryElementComponent implements OnInit {
  private ledgerElementTypes: typeof LedgerElementType = LedgerElementType;
  private type: LedgerElementType;

  constructor() {}

  ngOnInit() {}
}
