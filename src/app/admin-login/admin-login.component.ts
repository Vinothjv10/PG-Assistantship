import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  forgot_password = true;
  forgot_password_1 = false;

  constructor() { }

  AdminForm: any

  ngOnInit(): void {
    this.AdminForm = new FormGroup({

      "code": new FormControl(null, []),
      "password": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*[0-9]*')]),

    });
  }
  get password() { return this.AdminForm.get('password'); }


  submitData() {

  }
  forgot() {

  }

}
