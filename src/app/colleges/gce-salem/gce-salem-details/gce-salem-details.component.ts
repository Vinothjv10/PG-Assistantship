import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gce-salem-details',
  templateUrl: './gce-salem-details.component.html',
  styleUrls: ['./gce-salem-details.component.css']
})
export class GceSalemDetailsComponent implements OnInit {
  current_sem1 = false
  history_of_arrear = false
  lackattendance = false

  toggleStyle: boolean = false;


  Last = false

  submitted = false;
  // formBuilder: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

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
      account: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      bank: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      ifsc: ['', Validators.required],
      phonenumber: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      email: [null, [Validators.required, Validators.email]],

      arrear: [''],
      attendance: [''],
      remark: ['']
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
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

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  generate() {
    this.Last = true;
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

}
