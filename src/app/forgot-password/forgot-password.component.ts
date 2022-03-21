import { Component, OnInit } from '@angular/core';
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
  }

  change() {
    alert("Password Changes Successfully");
    window.location.reload();
  }

}
