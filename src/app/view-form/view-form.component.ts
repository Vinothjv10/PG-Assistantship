import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;

  printout() {
    let pdf = new jsPDF('p', 'pt', 'a3');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("Details_File.pdf");
      }
    });
    // pdf.save();
  }

  @Input() college: any;
  @Input() name1: any;
  @Input() Stud_name: any;
  @Input() tancet: any;
  // @Input() gate: any;
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

}
