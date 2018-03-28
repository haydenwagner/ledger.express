import { Component, Input, OnInit} from '@angular/core';
import { LedgerElement} from '../../models/ledger-element.model';
import { LedgerElementType} from '../../enums/ledger-element-type.enum';

@Component({
  selector: 'app-entry-element',
  templateUrl: './entry-element.component.html',
  styleUrls: ['./entry-element.component.scss']
})
export class EntryElementComponent implements OnInit {
  @Input() element: LedgerElement;
  LedgerElementType: typeof LedgerElementType = LedgerElementType;
  elementType: LedgerElementType;

  constructor() {}

  ngOnInit() {
     this.elementType = this.element.type;
  }
}
