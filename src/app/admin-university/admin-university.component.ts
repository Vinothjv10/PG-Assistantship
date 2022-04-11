import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-university',
  templateUrl: './admin-university.component.html',
  styleUrls: ['./admin-university.component.css']
})
export class AdminUniversityComponent implements OnInit {

  forgot_password = true;
  forgot_password_1 = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  AdminForm: any

  ngOnInit(): void {
    this.AdminForm = new FormGroup({

      "code": new FormControl(null, []),
      "password": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*[0-9]*')]),

    });
  }
  get password() { return this.AdminForm.get('password'); }


  uni_login() {
    this.router.navigate(['uni-admin'], { relativeTo: this.route });

  }
  forgot() {

  }

}
