import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
// import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  fileName = 'ExcelSheet.xlsx';

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
  @Input() lack_attentance: any;

  datas = [
    {
      year: '',
      course: 'sdfsdfsd',
      branch: '',
      name: '',
      communal_category: '',
      community_category: '',
      entry_mode: '',
      tancet: '',
      arrear: '',
      attendance: '',
      bank: '',
      ifsc: '',
      contanct: '',
      email: '',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


  printout(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}
