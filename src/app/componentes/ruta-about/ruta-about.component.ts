import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-ruta-about',
  templateUrl: './ruta-about.component.html',
  styleUrls: ['./ruta-about.component.css']
})
export class RutaAboutComponent implements OnInit {

  ngOnInit(): void {}
    /* usuario:string;
  password:string;

  constructor(private  auth: AngularFireAuth,private router: Router) { }

  ngOnInit(): void {
    console.log(this.auth);
  }

  async login(e){
    try {
      
      const rta = await this.auth.signInWithEmailAndPassword(this.usuario,this.password);
      //console.log(rta);
      //this.router.navigateByUrl("/ruta-resultados");
      localStorage.setItem('logged','true');
      const user = firebase.auth().currentUser
      console.log(user.getIdTokenResult());
            
    } catch (error) {
      console.log(error.message);
      const user = firebase.auth().currentUser
      console.log(user);
    }
  }

  async signOut(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('User Logged Out!');
      localStorage.setItem('logged','false');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  view(){
    try{
    const user = firebase.auth().currentUser;
    console.log(user);
    }
    catch(e){
      console.log(e);
    }
  } */

}
