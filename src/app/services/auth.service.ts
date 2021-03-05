import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseService: FirebaseService) { }

  register(name:String, email:String, password:String){
    return new Promise((resolve, reject ) => {
      firebase.auth().createUserWithEmailAndPassword(name,email, password)
      .then(user => resolve(user)),
      (err => reject(err));

    });
  }

  login(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then((userCredential) => {

        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    })
  }
}
