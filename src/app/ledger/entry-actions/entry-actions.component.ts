import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {EntryMode} from '../../enums/entry-mode.enum';

@Component({
  selector: 'app-entry-actions',
  templateUrl: './entry-actions.component.html',
  styleUrls: ['./entry-actions.component.scss']
})
export class EntryActionsComponent implements OnInit {
  @Input() viewMode: EntryMode;
  @Output() editEntryAction = new EventEmitter<string>();
  @Output() deleteEntryAction = new EventEmitter<string>();
  @Output() saveEditAction = new EventEmitter<string>();
  @Output() cancelEditAction = new EventEmitter<string>();

  EntryMode: typeof EntryMode = EntryMode;

  constructor() {}

  editEntry() {
    this.editEntryAction.emit('edit');
  }

  deleteEntry() {
    this.deleteEntryAction.emit('delete');
  }

  saveEdit() {
    this.saveEditAction.emit('saveEdit');
  }

  cancelEdit() {
    this.cancelEditAction.emit('cancelEdit');
  }

  ngOnInit() {}
}
