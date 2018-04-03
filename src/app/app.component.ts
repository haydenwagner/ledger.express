import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email: string;
  password: string;
  authError: false;
  private loginModal: NgbModalRef;

  constructor(public authService: AuthService, private modalService: NgbModal) {}

  openDialog(content) {
    this.loginModal = this.modalService.open(content);
  }

  signup() {
    this.authService.signup(this.email, this.password)
      .then(res => {
        this.email = this.password = '';
        this.loginModal.close();
      })
      .catch(err => {
        this.authError = err.message;
      });
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(res => {
        this.email = this.password = '';
        this.loginModal.close();
      })
      .catch(err => {
        this.authError = err.message;
      });
  }

  logout() {
    this.authService.logout();
  }

  clearAuthError(): void {
    this.authError = false;
  }
}
