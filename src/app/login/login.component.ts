import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SignedIn = false;
  gct = false;
  psg = false;


  gcecode = "gce01";

  constructor(private router: Router, private http: HttpClient) { }

  // me: any = [];
  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      "code": new FormControl(null, []),
      "password": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*[0-9]*')]),

    });
  }

  submitData() {
    this.http.get<any>("http://localhost:3000/gcesalem")
      .subscribe(res => {
        const user = res.find((a: any) => {

          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.SignedIn = true
          // this.gct = true;
        }
        // else {
        //   alert("User Not Found 🤷‍♂️");
        // }
      })
    // }, err => {
    //   alert("Something Went Wrong")
    // })
    this.http.get<any>("http://localhost:3000/gct")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          // this.SignedIn = true
          this.gct = true;
        }
      })
    this.http.get<any>("http://localhost:3000/psg")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          // this.SignedIn = true
          this.psg = true;
        }
      })
  }

  get password() { return this.registerForm.get('password'); }
  // get email() { return this.registerForm.get('email'); }


  Logout() {
    this.SignedIn = false
    window.alert("Thank You");

  }

}

