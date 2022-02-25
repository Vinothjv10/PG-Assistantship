import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  toggleStyle: boolean = false;


  Last = false

  registerForm: any = FormGroup;
  submitted = false;

  course_name: string = '';
  Name: any;
  Tancet: any;
  // Gate: any;
  History_arrea: any;
  Attendance: any;
  Account_no: any;
  Bank_name: any;
  Ifsc_code: any;
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value8: any;
  value9: any;

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      college: ['', Validators.required],
      year: ['', Validators.required],
      courseName: ['', Validators.required],
      branch: ['', Validators.required],
      Name: ['', Validators.required],
      communa_lCategory: ['', Validators.required],
      community_Admitted: ['', Validators.required],
      entry_Mode: ['', Validators.required],
      tancet: ['', Validators.required],
      // gate: ['', Validators.required],
      history_Arrear: ['', Validators.required],
      attendance: ['', Validators.required],
      account_No: ['', Validators.required],
      bank_Name: ['', Validators.required],
      ifsc_code: ['', Validators.required],

    });
    // this.registerForm.reset();

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // this.http.post<any>('http://localhost:4000/user/signup', this.registerForm).subscribe(data => {
    //   console.log(data);
    // })
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    alert('🔥 SUCCESS!! ´◡` 🔥');
    // nxtpage() {
    this.Last = true
    // }

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }
}
