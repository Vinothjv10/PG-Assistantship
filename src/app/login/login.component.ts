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

  SignedIn = false

  constructor(private router: Router, private http: HttpClient) { }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      "code": new FormControl(null, []),
      "password": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*[0-9]*')]),

    });
  }

  // submitData() {
  //   console.log(this.registerForm.value);

  //   if (this.registerForm.valid) {
  //     alert(`Logged Successfully`);
  //     this.registerForm.reset();

  //     this.SignedIn = true
  //   }

  // }
  submitData() {
    this.http.get<any>("http://localhost:3000/login")
      .subscribe(res => {
        const user = res.find((a: any) => {
          let value = a.code === this.registerForm.value.code && a.password === this.registerForm.value.password && console.log(a.college);

          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password;
        });
        if (user) {
          alert("Logged Successfully");
          this.registerForm.reset();
          this.SignedIn = true
        }
        else {
          alert("User Not Found");
        }
      }, err => {
        alert("Something Went Wrong")
      })
  }

  get password() { return this.registerForm.get('password'); }
  // get email() { return this.registerForm.get('email'); }


  Logout() {
    this.SignedIn = false
    window.alert("Thank You");

  }

}

