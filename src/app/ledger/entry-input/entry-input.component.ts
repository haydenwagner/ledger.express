import {Component, Injectable, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges} from '@angular/core';

import {Entry} from '../../models/entry.model';
import {LedgerElement} from '../../models/ledger-element.model';
import {LedgerElementType} from '../../enums/ledger-element-type.enum';
import {EntryMode} from '../../enums/entry-mode.enum';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import * as _ from 'lodash';


import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

// todo move eventually, from this example https://ng-bootstrap.github.io/#/components/datepicker/examples
/**
 * Example of a Native Date adapter
 */
@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {

  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}




@Component({
  selector: '[app-entry-input]',
  templateUrl: './entry-input.component.html',
  styleUrls: ['./entry-input.component.html'],

  // todo probably provide at a higher level
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class EntryInputComponent implements OnInit, OnChanges {
  @Input() elements: LedgerElement[];
  @Input() index: number;
  public inputNumber: number;
  @Output() addEntryAction = new EventEmitter<any>();

  LedgerElementType: typeof LedgerElementType = LedgerElementType;
  public typeEnum: typeof LedgerElementType = LedgerElementType;
  EntryMode: typeof EntryMode = EntryMode;
  entryForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.entryForm = this._fb.group({
      elements: this._fb.array([])
    });

    this.elements.map(element => {
      this.elementsFormArray.push(this.initElementForm(element));
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['index'] && changes['index'].currentValue) {
      console.log(changes['index']);
      this.inputNumber = changes['index'].currentValue;
    }
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
