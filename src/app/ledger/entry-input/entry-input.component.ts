import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Entry} from '../../models/entry.model';
import {LedgerElement} from '../../models/ledger-element.model';
import {LedgerElementType} from '../../enums/ledger-element-type.enum';
import {EntryMode} from '../../enums/entry-mode.enum';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import * as _ from 'lodash';


@Component({
  selector: '[app-entry-input]',
  templateUrl: './entry-input.component.html',
  styleUrls: ['./entry-input.component.html']
})
export class EntryInputComponent implements OnInit {
  @Input() elements: LedgerElement[];
  @Input() index: number;
  @Output() addEntryAction = new EventEmitter<any>();

  entryForm: FormGroup;

  LedgerElementType: typeof LedgerElementType = LedgerElementType;
  EntryMode: typeof EntryMode = EntryMode;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.entryForm = this._fb.group({
      elements: this._fb.array([])
    });

    this.elements.map(element => {
      this.elementsFormArray.push(this.initElementForm(element));
    });
  }

  initElementForm(element): FormGroup {
    let formGroup = this._fb.group({
      value: ['', Validators.required]
    });
    element.formRef = formGroup;
    return formGroup;
  }

  get elementsFormArray() { return <FormArray>this.entryForm.get('elements'); }

  addEntry(event) {
    console.log('add event received in the entry input controller, event received: ', event);
    if (this.entryForm.valid) {
      let data = [];
      _.each(this.elementsFormArray.controls, (elementForm, index) => {
        data.push({
          name: this.elements[index].name,
          type: this.elements[index].type,
          value: elementForm.get('value').value
        });
        elementForm.get('value').setValue('');
      });
      this.addEntryAction.emit(data);
    }
  }
}
