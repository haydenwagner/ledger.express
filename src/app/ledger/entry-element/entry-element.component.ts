import { Component, Input, OnInit} from '@angular/core';
import { LedgerElementType} from '../../enums/ledger-element-type.enum';

@Component({
  selector: 'app-entry-element',
  templateUrl: './entry-element.component.html',
  styleUrls: ['./entry-element.component.scss']
})
export class EntryElementComponent implements OnInit {
  @Input() element;
  LedgerElementType: typeof LedgerElementType = LedgerElementType;
  elementType: LedgerElementType;

  constructor() {}

  ngOnInit() {
     this.elementType = this.element.type;
  }

  dateChanged(event) {
    console.log(event);
  }
}
