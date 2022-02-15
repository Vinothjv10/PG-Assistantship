import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  registerForm: any = FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      year: ['', Validators.required],
      courseName: ['', Validators.required],
      branch: ['', Validators.required],
      Name: ['', Validators.required],
      communa_lCategory: ['', Validators.required],
      community_Admitted: ['', Validators.required],
      entry_Mode: ['', Validators.required],
      tancet: ['', Validators.required],
      gate: ['', Validators.required],
      history_Arrear: ['', Validators.required],
      attendance: ['', Validators.required],
      account_No: ['', Validators.required],
      bank_Name: ['', Validators.required],
      ifsc_code: ['', Validators.required],

    });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
