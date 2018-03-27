import { Component, OnInit } from '@angular/core';
import { LedgerElement } from '../../models/ledger-element.model';

@Component({
  selector: 'app-entry-input',
  templateUrl: './new-entry-input.component.html',
  styleUrls: ['./new-entry-input.component.css']
})
export class NewEntryInputComponent implements OnInit {
  private elements: LedgerElement[];

  constructor() {}

  ngOnInit() {}
}
