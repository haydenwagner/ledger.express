import {Component, OnInit, Input} from '@angular/core';

import {EntryMode} from '../../enums/entry-mode.enum';
import {Entry} from '../../models/entry.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LedgerElement} from '../../models/ledger-element.model';

@Component({
  selector: '[app-entry]',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.html']
})
export class EntryComponent implements OnInit {
  EntryMode: typeof EntryMode = EntryMode;
  entryMode: EntryMode = EntryMode.view;
  entryForm: FormGroup;
  elements: any[];

  @Input() entry: Entry;
  @Input() index: number;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.elements = this.entry.data;

    this.entryForm = this._fb.group({
      elements: this._fb.array([])
    });

    this.elements.map(element => {
      const control = <FormArray>this.entryForm.get('elements');
      control.push(this.initElementForm(element));
    });
  }

  initElementForm(element): FormGroup {
    let formGroup = this._fb.group({
      value: ['', Validators.required]
    });
    element.formRef = formGroup;
    return formGroup;
  }

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
