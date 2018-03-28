import { Component, Input, OnInit } from '@angular/core';
import { LedgerElement } from '../../models/ledger-element.model';

@Component({
  selector: 'app-new-entry-input',
  templateUrl: './new-entry-input.component.html',
  styleUrls: ['./new-entry-input.component.scss']
})
export class NewEntryInputComponent implements OnInit {
  @Input() elements: LedgerElement[];

  constructor() {}

  ngOnInit() {}
}
