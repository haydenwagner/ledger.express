import { Component, OnInit, Input } from '@angular/core';
import {Ledger} from '../../models/ledger.model';
import {Entry} from '../../models/entry.model';
import { AuthService } from '../../auth.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {LedgerElementType} from '../../enums/ledger-element-type.enum';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  @Input() data: Ledger;
  private userEntriesRef: AngularFirestoreCollection<Entry>;
  public userEntries: Observable<Entry[]>;
  public typeEnum: typeof LedgerElementType = LedgerElementType;
  public totalEntries: number;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore,
    private _fb: FormBuilder
  ) {
    authService.user.subscribe(user => {
      if (user) {
        this.userEntriesRef = afs.collection(`user/${user.uid}/entries`);
        this.userEntries = this.userEntriesRef.valueChanges();
        this.userEntriesRef.valueChanges().subscribe(entries => {
          entries.map(entry => console.log(entry));
          this.totalEntries = entries.length;
        });
      }
    });
  }

  ngOnInit() {
    console.log(this.data);
  }

  addEntry(data) {
    console.log('add event received in the entry list controller, data received: ', data);
    /*let testData = [
      {
        name: 'Date',
        type: this.typeEnum.date,
        value: '01/03/99'
      },
      {
        name: 'Name',
        type: this.typeEnum.text,
        value: 'First real entry'
      },
      {
        name: 'Amount',
        type: this.typeEnum.number,
        value: 100000
      }
    ];*/

    let entry = new Entry(data);
    let result = this.userEntriesRef.add(Object.assign({}, entry));
    // entry.$key = result.key;
    console.log(result);
    return entry;
  }
}
