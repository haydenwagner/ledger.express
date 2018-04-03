import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LedgerElement } from '../../models/ledger-element.model';

import {DrawerService} from '@swimlane/ngx-ui';
import {TemplateRef} from '@angular/core';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.scss']
})
export class EntryDetailComponent implements OnInit {
  @Input() elements: LedgerElement[];

  // @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

  constructor(private drawerMngr: DrawerService) { }

  // openDrawer(direction = 'left', size = 80) {
  //   this.drawerMngr.create({
  //     direction,
  //     template: this.editTmpl,
  //     size,
  //     context: 'Alert Everyone!'
  //   });
  // }

  ngOnInit() {}
}
