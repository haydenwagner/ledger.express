import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { LedgerElementType} from '../../enums/ledger-element-type.enum';
import {EntryMode} from '../../enums/entry-mode.enum';


import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';
import {LedgerElement} from '../../models/ledger-element.model';

@Component({
  selector: 'app-entry-element',
  templateUrl: './entry-element.component.html',
  styleUrls: ['./entry-element.component.scss']
})
export class EntryElementComponent implements OnInit, OnDestroy {
  @Input() element: LedgerElement;
  @Input() editMode: EntryMode;
  @Input() elementValue: any;

  elementType: LedgerElementType;
  elementName: string; //todo be more specific with type

  alive: boolean;
  LedgerElementType: typeof LedgerElementType = LedgerElementType;
  EntryMode: typeof EntryMode = EntryMode;

  entryElementForm: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.elementType = this.element.type;
    this.elementName = this.element.name;

    const type = this.LedgerElementType[this.elementType];

    this.entryElementForm = this.fb.group({
      [type]: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.entryElementForm.valueChanges.pipe(
      filter((value) => {
        console.log(value);
        return this.entryElementForm.valid;
      }),
      debounceTime(500),
      takeWhile(() => this.alive)
    ).subscribe(data => console.log(data));

    this.alive = true;
  }

  dateChanged(event) {
    console.log(event);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
