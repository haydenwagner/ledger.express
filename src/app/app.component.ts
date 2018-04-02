import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { DialogService } from '@swimlane/ngx-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('dialogTmpl') dialogTpl: TemplateRef<any>;

  title = 'app';
  email: string;
  password: string;
  private dialogComponent: any;

  constructor(public authService: AuthService,
              public dialogMngr: DialogService) {
  }

  openDialog(options): void {
    this.dialogComponent = this.dialogMngr.create(options);
  }

  signup() {
    this.authService.signup(this.email, this.password)
      .then(res => {
        this.email = this.password = '';
        this.dialogMngr.destroy(this.dialogComponent);
      });
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(res => {
        this.email = this.password = '';
        this.dialogMngr.destroy(this.dialogComponent);
      });
  }

  logout() {
    this.authService.logout();
  }
}
