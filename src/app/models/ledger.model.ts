import {Entry} from './entry.model';
import {LedgerElement} from './ledger-element.model';

export class Ledger {
  $key: string;
  name: string;
  elements: LedgerElement[];
  // entries: any;
}
