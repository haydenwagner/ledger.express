import * as _ from 'lodash';

export class Entry {
  $key: string;
  data: object; // temp, not sure the best way to document this

  constructor(data: Object[]) {
    //_.assign(this.data, data);
    this.data = data;
  }
}
