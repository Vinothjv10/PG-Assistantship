import { Component, Input, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {


  @Input() name1: any;
  @Input() Stud_name: any;
  @Input() tancet: any;
  @Input() gate: any;
  @Input() history_arrear: any;
  @Input() attendance: any;
  @Input() account_no: any;
  @Input() bank_name: any;
  @Input() ifsc_code: any;
  @Input() Year_of_student: any;
  @Input() branch: any;
  @Input() Communa_lCategory: any;
  @Input() Community_Admitted: any;
  @Input() Entry_Mode: any;


  constructor() { }

  ngOnInit(): void {
  }
  printout() {

  }
}
