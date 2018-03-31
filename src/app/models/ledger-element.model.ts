import { LedgerElementType } from '../enums/ledger-element-type.enum';

export interface LedgerElement {
  name: string;
  type: LedgerElementType;
}
