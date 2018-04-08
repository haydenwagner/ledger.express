import { Component, OnInit, Input } from '@angular/core';
import {Ledger} from '../../models/ledger.model';
import {Entry} from '../../models/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  @Input() data: Ledger;
  @Input() entries: Entry[];

  constructor() {}

  ngOnInit() {
    console.log(this.entries);
  }
}
