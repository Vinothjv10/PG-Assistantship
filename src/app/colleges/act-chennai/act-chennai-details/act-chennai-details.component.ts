import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-act-chennai-details',
  templateUrl: './act-chennai-details.component.html',
  styleUrls: ['./act-chennai-details.component.css']
})
export class ActChennaiDetailsComponent implements OnInit {

  current_sem1 = false
  history_of_arrear = false
  lackattendance = false
  eligible = false

  toggleStyle: boolean = false;


  Last = false

  submitted = true;
  // formBuilder: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  registerForm: any = FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      academic: ['', Validators.required],
      year: ['', Validators.required],
      semester: ['', Validators.required],
      branch: ['', Validators.required],
      course: ['', Validators.required],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      community_admitted: ['', Validators.required],
      community_student: ['', Validators.required],
      mode: ['', Validators.required],
      score: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      arrear: [''],
      attendance: [''],
      remark: [''],
      stipend: ['', Validators.required],
      transition: [''],
      date: [''],
      account: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      bank: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      ifsc: ['', Validators.required],
      phonenumber: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.http.post<any>('http://localhost:3100/api/users', this.registerForm.value).subscribe(data => {
      console.log(data);
      ({
        next: (data: any) => {
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      })
    })

    alert('🔥 SUCCESS!! ´◡` 🔥');
    // nxtpage() {
    this.registerForm.reset();
    // }
  }


  historyofarrear(evt: any) {
    var target = evt.target;
    if (target.value == "Yes") {
      this.history_of_arrear = true
      // console.log(target.value)
    }
    else if (target.value == "No") {
      this.history_of_arrear = false
    }
  }

  semester(e: any) {
    if (e.target.value == "sem1") {
      this.current_sem1 = false
      this.history_of_arrear = false

      // console.log("yes")
    }
    else if (e.target.value == "sem2") {
      this.current_sem1 = true
    }
    else if (e.target.value == "sem3") {
      this.current_sem1 = true
    }
    else if (e.target.value == "sem4") {
      this.current_sem1 = true
    }
  }

  lackofattendance(g: any) {
    if (g.target.value == "Yes") {
      this.lackattendance = true
    }
    else if (g.target.value == "No") {
      this.lackattendance = false
    }
  }

  stipend_eligible(f: any) {
    if (f.target.value == "Paid") {
      this.eligible = true
    }
    if (f.target.value == "Unpaid") {
      this.eligible = false
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  back() {
    this.router.navigate(['gce-salem'])
  }

  generate() {
    // this.Last = true;
    this.router.navigateByUrl('viewform');
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

  nextpage() {
    this.router.navigate(['act-chennai-form'], { relativeTo: this.route })
  }

}
