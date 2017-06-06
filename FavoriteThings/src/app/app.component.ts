import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things';
  favoriteColor = 'pink';
  favoriteNumber = 0;

  constructor(db: AngularFireDatabase) {

  }

  setColor(selectedColor: string): void {
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log('You selected update color');
  }

  setNumber(newNumber: number): void {
    this.favoriteNumber = newNumber;
  }
}
