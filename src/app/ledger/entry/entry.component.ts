import {Component, OnInit, Input} from '@angular/core';

import {EntryMode} from '../../enums/entry-mode.enum';
import {Entry} from '../../models/entry.model';

@Component({
  selector: '[app-entry]',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.html']
})
export class EntryComponent implements OnInit {
  EntryMode: typeof EntryMode = EntryMode;
  mode: EntryMode = EntryMode.view;

  @Input() entry: Entry;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
