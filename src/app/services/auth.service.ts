import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseService: FirebaseService) { }


  doRegister(value){
    return new Promise<any>(resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res = resolve(res),
        err => reject(err)
      )
    }
  }


}
