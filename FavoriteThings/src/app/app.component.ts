import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Favorite Things';
  favoriteColor = 'pink';
  favoriteNumber = 0;

  constructor(db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    firebase.database().ref().child('color').on('value',
      (snapshot: firebase.database.DataSnapshot) => {
        this.favoriteColor = snapshot.val();
      });

    firebase.database().ref('number').on('value',
      (snapshot: firebase.database.DataSnapshot) => {
        this.favoriteNumber = snapshot.val();
      });
  }

  ngOnDestroy(): void {
    firebase.database().ref().child('color').off();
    firebase.database().ref('number').off();
  }

  setColor(selectedColor: string): void {
    firebase.database().ref().child('color').set(selectedColor);
  }

  // updateColor(): void {
  //   firebase.database().ref().child('color').once('value',
  //     (snapshot: firebase.database.DataSnapshot) => {
  //       this.favoriteColor = snapshot.val();
  //     });
  // }

  setNumber(newNumber: number): void {
    firebase.database().ref().child('number').set(newNumber);
  }
}
