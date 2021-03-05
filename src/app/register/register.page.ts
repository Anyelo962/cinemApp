import { AuthService } from 'auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private nameAndLastName:String;
  private email:String;
  private password:string;
  constructor(private router: Router, private authService: AuthService) { }



  AddUser(){
    this.authService.registerUser(this.nameAndLastName, this.email, this.password)
    .then((res) =>{
      this.router.navigate([""])
    }).catch(err => console.log('err', err.mensage));
  }
  ngOnInit() {

  }

}
