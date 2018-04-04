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
    entries: [
      {
        $key: _.uniqueId(),
        data: [
          {
            name: 'Date',
            type: this.typeEnum.date,
            value: '01/03/99'
          },
          {
            name: 'Name',
            type: this.typeEnum.text,
            value: 'First entry'
          },
          {
            name: 'Amount',
            type: this.typeEnum.number,
            value: 100
          }
        ]
      },
      {
        $key: _.uniqueId(),
        data: [
          {
            name: 'Date',
            type: this.typeEnum.date,
            value: '01/04/99'
          },
          {
            name: 'Name',
            type: this.typeEnum.text,
            value: 'Second entry'
          },
          {
            name: 'Amount',
            type: this.typeEnum.number,
            value: 150
          }
        ]
      },
      {
        $key: _.uniqueId(),
        data: [
          {
            name: 'Date',
            type: this.typeEnum.date,
            value: '01/05/99'
          },
          {
            name: 'Name',
            type: this.typeEnum.text,
            value: 'Third entry'
          },
          {
            name: 'Amount',
            type: this.typeEnum.number,
            value: 200
          }
        ]
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }
}
