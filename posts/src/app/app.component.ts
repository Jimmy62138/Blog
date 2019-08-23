import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titre = 'posts';
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDAYEdN5UcXrfzHl9vElK6JjB1NMHQARw0",
      authDomain: "posts-a5ba8.firebaseapp.com",
      databaseURL: "https://posts-a5ba8.firebaseio.com",
      projectId: "posts-a5ba8",
      storageBucket: "",
      messagingSenderId: "384783854146",
      appId: "1:384783854146:web:966024a0c704f3d2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }


}
