import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAD4Pn75tBU-rRF-ua9G6M1L5A422WAa_Q",
      authDomain: "recipebook-969e7.firebaseapp.com"
    });
  }
}
