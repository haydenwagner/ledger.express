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
  entryMode: EntryMode = EntryMode.view;

  @Input() entry: Entry;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}

  editEntry(event) {
    // we have key here now for this entry
    console.log(event);
    this.toggleMode();
  }

  deleteEntry(event) {
    // we have key here now for this entry
    console.log(event);
  }

  saveEdit(event) {
    // we have key here now for this entry
    console.log(event);
  }

  cancelEdit(event) {
    // we have key here now for this entry
    console.log(event);
    this.toggleMode();
  }

  toggleMode() {
    this.entryMode = (this.entryMode === EntryMode.view) ? EntryMode.edit : EntryMode.view;
  }
}
