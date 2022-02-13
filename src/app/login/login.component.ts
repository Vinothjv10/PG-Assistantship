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

  constructor(private router: Router) { }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      // "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*[0-9]*')]),

    });
  }

  submitData() {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      alert(`Logged Successfully`);
      this.registerForm.reset();

      this.SignedIn = true
    }

  }

  get password() { return this.registerForm.get('password'); }
  // get email() { return this.registerForm.get('email'); }


  Logout() {
    this.SignedIn = false
    window.alert("Thank You");

  }

}

