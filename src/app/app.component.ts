import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Entry} from './models/entry.model';

export interface User {uid: string; entries: Entry[]; }

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
  private userCollection: AngularFirestoreCollection<User>;


  constructor(
    public authService: AuthService,
    private modalService: NgbModal,
    private afs: AngularFirestore
  ) {
    this.userCollection = afs.collection('user');
  }

  openDialog(content) {
    this.loginModal = this.modalService.open(content);
  }

  signup() {
    this.authService.signup(this.email, this.password)
      .then(res => {
        this.email = this.password = '';
        this.makeUserCollection(res.uid);
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

  makeUserCollection(uid) {
    this.userCollection.add({uid: uid})
      .then(function(userDoc) {
        console.log(userDoc);
        userDoc.collection('entries');
      })
      .catch(err => {
        console.log(err.message);
      });

    // this.userCollection.add({uid : uid, entries: []})
    //   .then(res => {
    //     console.log('user document added to collection');
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
  }
}
