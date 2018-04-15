import { Component} from '@angular/core';
import { AuthService } from './auth.service';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {User} from './models/user.model';

import {map} from 'rxjs/operators';


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
  private allUsers: AngularFirestoreCollection<User>;
  private testCollection: any;
  public tests: any;


  constructor(
    public authService: AuthService,
    private modalService: NgbModal,
    private afs: AngularFirestore
  ) {
    /**
    * Working version of the type of query and valueChanges subscription I could do to get the user in the ledger or entry list component.
    */

    this.allUsers = afs.collection('user');

    this.allUsers.doc('testCustomId').set({
      data: 'data for custom'
    });

    this.userCollection = afs.collection('user', ref => ref.where('uid', '==', 'GYjfq9CmF7dqw5UOXdwuVf3oR4u1'));
    this.userCollection.valueChanges().subscribe(userCollection => {
      console.log(userCollection);
    });


    // this.newSubcollection = afs.collection('user').add({uid: 'test'}).then(function(res) {
    //   console.log(res);
    //   let entriesCollection = res.collection('entries').add({data: {name: 'jim', date: new Date()}});
    //   console.log(entriesCollection);

      // collection('testSub').doc('testSubDoc');
    // }).catch(err => console.log(err));
  }

  openDialog(content) {
    let counter = 3;

    this.loginModal = this.modalService.open(content);

    this.testCollection = this.afs.collection('test');

    /**
     * Tests is not a stream of documents. It is stream of states
     * of an array that hold documents. i.e. in my subscription function
     * for the first time I will get an array of objects. If I add a doc
     * to that collection I will get another array passed to my subscribe
     * function with one more object.
    */
    this.tests = this.testCollection.valueChanges().map(test => {
      test.zipdip = 'p' + counter;
      return test;
    });

    this.tests.subscribe(test => {
      console.log(test);

      if (counter < 3) {
        this.testCollection.add({newProp: 'tests'});
        counter++;
      }
    });
  }

  signup() {
    this.authService.signup(this.email, this.password)
      .then(res => {
        this.makeUserCollection(res.uid, this.email);
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

  makeUserCollection(uid, email) {
    this.allUsers.doc(uid).set({email: email})
      .then(function(userDoc) {
        console.log(userDoc);
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
