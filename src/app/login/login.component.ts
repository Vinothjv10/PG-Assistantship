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

  act_chennai = false;
  alagapa = false;
  anna_university_coimbatore = false;
  anna_university_madurai = false;
  anna_university_tirunelveli = false;
  ceg_guindy = false;
  cit_coimbatore = false;
  gce_bargur = false;
  gce_erode = false;
  gce_salem = false;
  gce_thirunelveli = false;
  gct_coimabatore = false;
  mit_chennai = false;
  periyar_vellor = false;
  psg_coimbatore = false;
  thiagarajar_madurai = false;


  // gcecode = "gce01";

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
    this.http.get<any>("http://localhost:3000/act_chennai")
      .subscribe(res => {
        const user = res.find((a: any) => {

          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password;

        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.act_chennai = true
          // this.gct = true;
        }
        // else {
        //   alert("User Not Found 🤷‍♂️");
        // }
      })
    // }, err => {
    //   alert("Something Went Wrong")
    // })
    this.http.get<any>("http://localhost:3000/alagapa")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.alagapa = true;
        }
      })
    this.http.get<any>("http://localhost:3000/anna_university_coimbatore")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          // this.SignedIn = true
          this.anna_university_coimbatore = true;
        }
      })
    this.http.get<any>("http://localhost:3000/anna_university_madurai")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.anna_university_madurai = true;
        }
      })
    this.http.get<any>("http://localhost:3000/anna_university_tirunelveli")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.anna_university_tirunelveli = true;
        }
      })
    this.http.get<any>("http://localhost:3000/ceg_guindy")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.ceg_guindy = true;
        }
      })
    this.http.get<any>("http://localhost:3000/cit_coimbatore")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.cit_coimbatore = true;
        }
      })
    this.http.get<any>("http://localhost:3000/gce_bargur")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.gce_bargur = true;
        }
      })
    this.http.get<any>("http://localhost:3000/gce_erode")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.gce_erode = true;
        }
      })
    this.http.get<any>("http://localhost:3000/gce_salem")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.gce_salem = true;
        }
      })
    this.http.get<any>("http://localhost:3000/gce_tirunelveli")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.gce_thirunelveli = true;
        }
      })
    this.http.get<any>("http://localhost:3000/gct_coimbatore")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.gct_coimabatore = true;
        }
      })
    this.http.get<any>("http://localhost:3000/mit_chennai")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.mit_chennai = true;
        }
      })
    this.http.get<any>("http://localhost:3000/periyar_vellor")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.periyar_vellor = true;
        }
      })
    this.http.get<any>("http://localhost:3000/psg_coimbatore")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.psg_coimbatore = true;
        }
      })
    this.http.get<any>("http://localhost:3000/thiagarajar_madurai")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.code === this.registerForm.value.code && a.password === this.registerForm.value.password
        });
        if (user) {
          alert("Logged Successfully ✌️");
          this.registerForm.reset();
          this.thiagarajar_madurai = true;
        }
      })
  }

  get password() { return this.registerForm.get('password'); }
  // get email() { return this.registerForm.get('email'); }


  Logout() {
    this.gce_salem = false
    window.alert("Thank You");

  }

}

