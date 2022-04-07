import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
interface coursename {
  names: string;
}

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})


export class DetailsFormComponent implements OnInit {
  // Show Options
  current_sem1 = false
  history_of_arrear = false
  lackattendance = false

  @Input() titles: any
  @Input() courses: coursename[] = []


  toggleStyle: boolean = false;


  Last = false

  submitted = false;

  Name: any;
  Tancet: any;
  History_arrea: any;
  Lack_attentance: any;
  Account_no: any;
  Bank_name: any;
  Ifsc_code: any;
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value6: any;
  value7: any;
  // formBuilder: any;

  constructor(
    private formBuilder: FormBuilder, private http: HttpClient
  ) {
  }
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
    this.Last = false;
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
    this.Last = true
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

}
