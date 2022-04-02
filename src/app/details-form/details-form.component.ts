import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})


export class DetailsFormComponent implements OnInit {
  // Show Options
  current_sem1 = false
  history_of_arrear = false

  @Input() titles: any


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
  formBuilder: any;

  constructor(
  ) {
  }
  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),

    });
  }
  get name() { return this.registerForm.get('name'); }
  // get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // if (this.registerForm.invalid) {
    //   return;
    // }
    // console.log(this.registerForm.value);

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    alert('🔥 SUCCESS!! ´◡` 🔥');
    // nxtpage() {

    this.Last = true;
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

      console.log("yes")
    }
    else if (e.target.value == "sem2") {
      this.current_sem1 = true
      console.log("no")
    }
    else if (e.target.value == "sem3") {
      this.current_sem1 = true
      console.log("no")
    }
    else if (e.target.value == "sem4") {
      this.current_sem1 = true
      console.log("no")
    }
  }



  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

}


 // this.registerForm = this.formBuilder.group({
    //   college: ['', Validators.required],
    //   year: ['', Validators.required],
    //   courseName: ['', Validators.required],
    //   branch: ['', Validators.required],
    //   Name: ['', Validators.required],
    //   communa_lCategory: ['', Validators.required],
    //   community_Admitted: ['', Validators.required],
    //   entry_Mode: ['', Validators.required],
    //   tancet: ['', Validators.required],
    //   // gate: ['', Validators.required],
    //   history_Arrear: ['', Validators.required],
    //   lack_attentance: ['', Validators.required],
    //   // attendance: ['', Validators.required],
    //   account_No: ['', Validators.required],
    //   bank_Name: ['', Validators.required],
    //   ifsc_code: ['', Validators.required],
    // });