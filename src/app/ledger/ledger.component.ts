import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Ledger } from '../models/ledger.model';
import { LedgerElementType } from '../enums/ledger-element-type.enum';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent implements OnInit {
  typeEnum: typeof LedgerElementType = LedgerElementType;

  public ledgerData: Ledger = {
    $key: _.uniqueId(),
    name: 'Test Ledger',
    elements: [
      {
        name: 'Date',
        type: this.typeEnum.date
      },
      {
        name: 'Name',
        type: this.typeEnum.text
      },
      {
        name: 'Amount',
        type: this.typeEnum.number
      },
    ],
    entries: []
  };

  constructor() { }

  ngOnInit() {
  }

}
