import { Component, OnInit, Input } from '@angular/core';
import {Ledger} from '../../models/ledger.model';
import {Entry} from '../../models/entry.model';
import { AuthService } from '../../auth.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {LedgerElementType} from '../../enums/ledger-element-type.enum';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  @Input() data: Ledger;
  private userEntriesRef: AngularFirestoreCollection<Entry>;
  public userEntries: Observable<Entry[]>;
  private typeEnum: typeof LedgerElementType = LedgerElementType;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) {
    authService.user.subscribe(user => {
      if (user) {
        this.userEntriesRef = afs.collection(`user/${user.uid}/entries`);
        this.userEntries = this.userEntriesRef.valueChanges();
        this.userEntriesRef.valueChanges().subscribe(entries => {
          entries.map(entry => console.log(entry));
        });
      }
    });
  }

  ngOnInit() {
    console.log(this.data);
  }

  addEntry(event) {
    console.log(event + ' from the entry list');
    let testData = [
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
    ];

    let entry = new Entry(testData);
    let result = this.userEntriesRef.add(Object.assign({}, entry));
    // entry.$key = result.key;
    console.log(result);
    return entry;
  }
}
