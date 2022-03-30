import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.forgotForm = new FormGroup({

      "old_password": new FormControl(null, []),
      "new_password": new FormControl(null, []),
      "confirm_password": new FormControl(null, []),

    });
  }

  change() {
    alert("Password Changes Successfully");
    window.location.reload();
  }

}
